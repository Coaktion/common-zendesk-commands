/* eslint-disable camelcase */
import {Command} from '@oclif/core'
import {readFile, writeFile} from 'node:fs/promises'
import * as path from 'node:path'
import {exec} from 'node:child_process'

type AppConfig = {
  parameters: any[any];
  app_id?: string;
};

export default class Publish extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  zcliAppConfig: AppConfig = {parameters: {}, app_id: ''};

  async run(): Promise<void> {
    const rootPath = process.cwd()
    const rawData = await readFile(path.join(rootPath, 'dist/manifest.json'), 'utf-8')
    const data: AppConfig = JSON.parse(rawData)
    for (const element of data.parameters) {
      this.zcliAppConfig.parameters[element.name] = element.default || ''
    }

    if (process.env.ZENDESK_APP_ID) {
      this.zcliAppConfig.app_id = process.env.ZENDESK_APP_ID
    }

    await writeFile(path.join(rootPath, 'dist/zcli-app-config.json'), JSON.stringify(this.zcliAppConfig))

    const command = `zcli apps:${process.env.ZENDESK_APP_ID ? 'update' : 'create'}`
    this.log(`Running command: ${command}...`)

    exec(command, {cwd: path.join(rootPath, 'dist')}, (error, stdout, _) => {
      if (error) {
        this.log(`exec error: ${error}`)
        return
      }

      if (!process.env.ZENDESK_APP_ID) {
        this.log(
          [
            'For the github action to be able to update the project in the future,\n',
            `create a repository variable with the name ZENDESK_APP_ID and the value ${
              stdout.split('app_id: ')[1]
            }.\n`,
            'you can find the repository variables in the settings of the repository.\n',
            'For more information, see https://docs.github.com/en/actions/learn-github-actions/variables',
          ].join(''),
        )
      }

      this.log(stdout)
    })
  }
}

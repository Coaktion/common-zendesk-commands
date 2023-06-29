import {Command} from '@oclif/core'
import * as path from 'node:path'
import {exec} from 'node:child_process'
import {createZcliAppConfig} from '../utils'

export default class Publish extends Command {
  static description = 'Creates or updates the app in Zendesk';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {};

  static args = {};

  async run(): Promise<void> {
    const rootPath = process.cwd()
    const paths = ['dist', 'build', '']
    await createZcliAppConfig(paths, rootPath)

    const command = `zcli apps:${
      process.env.ZENDESK_APP_ID ? 'update' : 'create'
    }`
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

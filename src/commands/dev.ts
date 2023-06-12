import {Command} from '@oclif/core'
import {spawn} from 'node:child_process'
import {getDirectoryFiles, createZcliAppConfig} from '../utils'

export default class Dev extends Command {
  static description = 'Starts the app in Zendesk development mode'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  public async run(): Promise<void> {
    const rootPath = await getDirectoryFiles()
    await createZcliAppConfig(rootPath)

    const command = 'zcli apps:server'
    this.log(`Running ${command} in ${rootPath}`)
    spawn(command, {cwd: rootPath, shell: true, stdio: 'inherit'})
  }
}

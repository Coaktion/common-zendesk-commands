import {Command} from '@oclif/core'
import {createZcliAppConfig} from '../utils'

export default class GenerateConfig extends Command {
  static description = 'Generates a zcli.apps.config.json file'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  public async run(): Promise<void> {
    const paths = ['dist', 'build', '', 'zendesk', 'zendesk-mock']
    await createZcliAppConfig(paths)
  }
}

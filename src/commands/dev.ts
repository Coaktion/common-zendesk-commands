import { getDirectoryFiles, createZcliAppConfig } from "../utils";
import { Command } from "@oclif/core";
import { spawn } from "node:child_process";

export default class Dev extends Command {
  static description = "Starts the app in Zendesk development mode";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {};

  static args = {};

  public async run(): Promise<void> {
    const paths = ["", "zendesk", "zendesk-mock"];
    const rootPath = await getDirectoryFiles(paths);
    await createZcliAppConfig(paths, rootPath);

    const command = "zcli apps:server";
    this.log(`Running ${command} in ${rootPath}`);
    spawn(command, { cwd: rootPath, shell: true, stdio: "inherit" });
  }
}

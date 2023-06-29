/* eslint-disable camelcase */
import { readFileSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";

type AppConfig = {
  parameters: any[any];
  app_id?: string;
};

export const createZcliAppConfig = async (
  paths: string[],
  rootPath?: string
): Promise<void> => {
  const zcliAppConfig: AppConfig = { parameters: {}, app_id: "" };

  rootPath = rootPath || (await getDirectoryFiles(paths));

  const rawData = await readFile(path.join(rootPath, "manifest.json"), "utf-8");
  const data: AppConfig = JSON.parse(rawData);
  for (const element of data.parameters) {
    zcliAppConfig.parameters[element.name] = element.default || "";
  }

  if (process.env.ZENDESK_APP_ID) {
    zcliAppConfig.app_id = process.env.ZENDESK_APP_ID;
  }

  await writeFile(
    path.join(rootPath, "zcli.apps.config.json"),
    JSON.stringify(zcliAppConfig)
  );
};

export const getDirectoryFiles = async (
  defaultDirectories: string[]
): Promise<string> => {
  for (const directory of defaultDirectories) {
    const directoryPath = path.join(process.cwd(), directory);
    const file = path.join(directoryPath, "manifest.json");
    try {
      readFileSync(file, "utf-8");
      return directoryPath;
    } catch (error: unknown) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error;
      }
    }
  }

  throw new Error("Manifest file not found in default directories");
};

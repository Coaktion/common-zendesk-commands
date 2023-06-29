# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @coaktion/common-zendesk-commands
$ common-zendesk-commands COMMAND
running command...
$ common-zendesk-commands (--version)
@coaktion/common-zendesk-commands/0.5.0 darwin-arm64 node-v16.19.0
$ common-zendesk-commands --help [COMMAND]
USAGE
  $ common-zendesk-commands COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`common-zendesk-commands dev`](#common-zendesk-commands-dev)
- [`common-zendesk-commands generate-config`](#common-zendesk-commands-generate-config)
- [`common-zendesk-commands help [COMMANDS]`](#common-zendesk-commands-help-commands)
- [`common-zendesk-commands plugins`](#common-zendesk-commands-plugins)
- [`common-zendesk-commands plugins:install PLUGIN...`](#common-zendesk-commands-pluginsinstall-plugin)
- [`common-zendesk-commands plugins:inspect PLUGIN...`](#common-zendesk-commands-pluginsinspect-plugin)
- [`common-zendesk-commands plugins:install PLUGIN...`](#common-zendesk-commands-pluginsinstall-plugin-1)
- [`common-zendesk-commands plugins:link PLUGIN`](#common-zendesk-commands-pluginslink-plugin)
- [`common-zendesk-commands plugins:uninstall PLUGIN...`](#common-zendesk-commands-pluginsuninstall-plugin)
- [`common-zendesk-commands plugins:uninstall PLUGIN...`](#common-zendesk-commands-pluginsuninstall-plugin-1)
- [`common-zendesk-commands plugins:uninstall PLUGIN...`](#common-zendesk-commands-pluginsuninstall-plugin-2)
- [`common-zendesk-commands plugins update`](#common-zendesk-commands-plugins-update)
- [`common-zendesk-commands publish`](#common-zendesk-commands-publish)

## `common-zendesk-commands dev`

Starts the app in Zendesk development mode

```
USAGE
  $ common-zendesk-commands dev

DESCRIPTION
  Starts the app in Zendesk development mode

EXAMPLES
  $ common-zendesk-commands dev
```

_See code: [dist/commands/dev.ts](https://github.com/coaktion/common-zendesk-commands/blob/v0.5.0/dist/commands/dev.ts)_

## `common-zendesk-commands generate-config`

Generates a zcli.apps.config.json file

```
USAGE
  $ common-zendesk-commands generate-config

DESCRIPTION
  Generates a zcli.apps.config.json file

EXAMPLES
  $ common-zendesk-commands generate-config
```

_See code: [dist/commands/generate-config.ts](https://github.com/coaktion/common-zendesk-commands/blob/v0.5.0/dist/commands/generate-config.ts)_

## `common-zendesk-commands help [COMMANDS]`

Display help for common-zendesk-commands.

```
USAGE
  $ common-zendesk-commands help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for common-zendesk-commands.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `common-zendesk-commands plugins`

List installed plugins.

```
USAGE
  $ common-zendesk-commands plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ common-zendesk-commands plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `common-zendesk-commands plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ common-zendesk-commands plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ common-zendesk-commands plugins add

EXAMPLES
  $ common-zendesk-commands plugins:install myplugin

  $ common-zendesk-commands plugins:install https://github.com/someuser/someplugin

  $ common-zendesk-commands plugins:install someuser/someplugin
```

## `common-zendesk-commands plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ common-zendesk-commands plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ common-zendesk-commands plugins:inspect myplugin
```

## `common-zendesk-commands plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ common-zendesk-commands plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ common-zendesk-commands plugins add

EXAMPLES
  $ common-zendesk-commands plugins:install myplugin

  $ common-zendesk-commands plugins:install https://github.com/someuser/someplugin

  $ common-zendesk-commands plugins:install someuser/someplugin
```

## `common-zendesk-commands plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ common-zendesk-commands plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ common-zendesk-commands plugins:link myplugin
```

## `common-zendesk-commands plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ common-zendesk-commands plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ common-zendesk-commands plugins unlink
  $ common-zendesk-commands plugins remove
```

## `common-zendesk-commands plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ common-zendesk-commands plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ common-zendesk-commands plugins unlink
  $ common-zendesk-commands plugins remove
```

## `common-zendesk-commands plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ common-zendesk-commands plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ common-zendesk-commands plugins unlink
  $ common-zendesk-commands plugins remove
```

## `common-zendesk-commands plugins update`

Update installed plugins.

```
USAGE
  $ common-zendesk-commands plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `common-zendesk-commands publish`

Creates or updates the app in Zendesk

```
USAGE
  $ common-zendesk-commands publish

DESCRIPTION
  Creates or updates the app in Zendesk

EXAMPLES
  $ common-zendesk-commands publish
```

_See code: [dist/commands/publish.ts](https://github.com/coaktion/common-zendesk-commands/blob/v0.5.0/dist/commands/publish.ts)_

<!-- commandsstop -->

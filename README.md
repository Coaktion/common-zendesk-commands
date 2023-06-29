# common-zendesk-commands

A library of common commands for Zendesk apps

<!-- toc -->

- [common-zendesk-commands](#common-zendesk-commands)
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

# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## Future

- tests
- ts types
- auto-tabbing through common parts of snippets (name of core resource, etc.)
- configurable override of doc paths per provider repo (see: doc_root_path_overrides).

## [0.6.0](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.5.0...v0.6.0) (2021-03-04)

### Changed

- pulling 125 providers (all official or partner tier) from the registry and shipping 9341 snippets
- refactored the core workflow to remove the need for the hard-coded number of total snippets (thanks, @orrin!)
- regression: dropped async checkout/download of repos, making the snippet generation process a lot longer. Will fix in subsequent releases - this doesn't affect extension users, only snippet generators (devs working on this project).
- created to specify docs in non-standard paths.

## [0.5.0](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.4.0...v0.5.0) (2021-03-01)

### Changed

- Snippets updated to match latest documentation. Created snippets 5385 from 111 providers.
- providers now sourced from the public registry
- upgraded all libaries

## [0.4.0](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.3.0...v0.4.0) (2019-03-27)

### Changed

- Snippets updated to match latest documentation. Now up to snippets 1719 over 81 providers.

## [0.3.0](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.2.0...v0.3.0) (2018-06-26)

### Changed

- Snippets updated to match latest documentation. Now up to snippets 1665 over 81 providers.

## [0.2.0](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.1.5...v0.2.0) (2018-05-10)

- override and extra/common snippets now added through config.
- deprecated resources and data sources manually added for their successor.
- snippets file rebuilt totalling 1491.

## [0.1.5](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.1.4...v0.1.5) (2018-05-04)

- gif (🔊 Jiff 🔊) demo added to readme

## [0.1.4](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.1.3...v0.1.4) (2018-05-04)

- provider repos now scanned from the terraform-providers organization.
- snippets total 1452.
- formatting and beautifying ✨
- added error handling for missing absent examples.

## [0.1.3](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.1.2...v0.1.3) (2018-04-26)

- `ocp` now reads `opc` to get all Oracle Public Cloud resources. Now at 856.

## [0.1.2](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.1.1...v0.1.2) (2018-04-26)

- markdown files are sometimes supplied as `.md` and other times `.markdown`. The code now handles both.

## [0.1.1](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.0.4...v0.1.1) (2018-04-26)

- Source code fixed, though still very hacky in how async is controlled in the main function.
- added github template extras
- snippets are now in alpha order so generating docs will produce valid, ordered diffs.
- cleanup works, woot!

## [0.0.4](https://github.com/run-at-scale/vscode-terraform-doc-snippets/compare/v0.0.3...v0.0.4) (2018-04-24)

- README made whole.
- metadata created to round out project.
- broke source code (but not snippet package) in trying to work through lock issues. Fix forthcoming.

## [0.0.3](https://github.com/run-at-scale/terraform-doc-snippets/compare/v0.0.2...v0.0.3) (2018-04-24)

- this release never was... the maintainer is clearly still growing accustomed to the release tools in the node space.

## 0.0.2 (2018-04-23)

- sprucing up for initial release to marketplace

## 0.0.1 (2018-04-23)

- Initial release

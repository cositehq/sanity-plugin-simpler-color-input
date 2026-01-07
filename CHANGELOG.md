<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v3.1.1...v4.0.0) (2026-01-07)

### ⚠ BREAKING CHANGES

- **deps**: Now requires Sanity Studio v5 (sanity@5.x)
- **deps**: Now requires React 19.2.2 or higher
- **deps**: `styled-components` v6.1.15 or later is now required
- Updated `@sanity/ui` to v3.x and `@sanity/icons` to v3.7.x

### Features

- Add support for Sanity Studio v5 and React 19

### Migration Guide

If you're upgrading from v3.x:

1. Ensure your project is using Sanity Studio v5 (`sanity@^5.0.0`)
2. Ensure your project is using React 19.2.2 or higher
3. Update styled-components to v6.1.15 or higher
4. Update this plugin: `npm install sanity-plugin-simpler-color-input@4`

For Sanity Studio v3/v4 with React 18, continue using version 3.x of this plugin.

## [3.1.1](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v3.1.0...v3.1.1) (2025-07-15)

### Bug Fixes

- **deps:** allow studio v4 in peer dep ranges ([5a41103](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/5a4110327cdb64233bb4f8d342021b12be50ba77))

## [3.1.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v3.0.1...v3.1.0) (2025-06-17)

### Features

- add color value showing toggle option ([f2a07b3](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/f2a07b3cdfde525d9bd3c7957685378a1aeefc6a))

### Bug Fixes

- fix color value overflowing fix implementation ([61e2bc1](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/61e2bc1620b45b88b0d7defe6c61b0662d8bd28f))
- fix text overflow effect ([b816414](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/b8164140972accf0240f7b705e6aefa77bf9541d))
- simplify overflow code ([e86cdbe](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/e86cdbe61581380f7c74e695b36625dee99a2cf3))

## [3.0.1](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v3.0.0...v3.0.1) (2025-02-26)

### Bug Fixes

- support react 19 ([78237bb](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/78237bb6ed8b480ffccc34276588e999c2dfe516))

## [3.0.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v2.2.2...v3.0.0) (2024-10-29)

### ⚠ BREAKING CHANGES

- migrate to v6 pkg-utils best practice
- **deps**: `styled-components` v6.1 or later is now required

### Features

- migrate to v6 pkg-utils best practice ([e8adbc2](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/e8adbc29cefcb3dd083e36d3941b5962a4411eab))

### Miscellaneous Chores

- dependency updates ([9e993ce](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/9e993cef928d9007aac92c7dd71e339fa9804fc1), [7443ff9](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/7443ff9c49049e962773111f478b557d0a0599f3))

## [2.2.2](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v2.2.1...v2.2.2) (2024-06-11)

### Bug Fixes

- @uiw/react-color window is not defined ([d598f60](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/d598f6008ba651b2d63b4768357bada6d20a97c5))

## [2.2.1](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v2.2.0...v2.2.1) (2024-02-24)

### Bug Fixes

- upgrade @uiw/react-color and import dist ([34201c6](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/34201c66b2ec8f23e5e2d549e7b65c7fbc197719))

## [2.2.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v2.1.0...v2.2.0) (2024-02-05)

### Features

- add search input ([75adc1f](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/75adc1fa6def344740050aabc96b890c4025390c))

## [2.1.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v2.0.0...v2.1.0) (2024-01-06)

### Features

- hide Clear button when field is required ([f2465b4](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/f2465b4e17e250a2972444730684e72d5c3d9f97))

### Bug Fixes

- support latest `@sanity/ui` ([4ee8f48](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/4ee8f4846acd5028e212e213d4f9cc1e0016bf5e))

## [2.0.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.3.1...v2.0.0) (2023-12-11)

### ⚠ BREAKING CHANGES

- replace `enableAlpha` option with customizable `colorFormat` option, default to hex format

### Features

- replace `enableAlpha` option with customizable `colorFormat` option, default to hex format ([d3731d3](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/d3731d3c92cd7d0d257611d7c8789040c6addd16))

## [1.3.1](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.3.0...v1.3.1) (2023-11-08)

### Bug Fixes

- broken Clear button for `textColor` and `highlightColor` annotations ([ff839b8](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/ff839b8156170d1b0a1d97c3df075a3c14fdc99d))

## [1.3.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.2.1...v1.3.0) (2023-11-08)

### Features

- add `defaultColorList` and `defaultEnableAlpha` properties to plugin config ([1072739](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/1072739821ad7fdb5701fec9e314cc79d9b8947f))

## [1.2.1](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.2.0...v1.2.1) (2023-11-07)

### Bug Fixes

- unreadable input in dark mode ([a4c4a14](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/a4c4a14b0fe32dae7b40c2c6502e94ac69261356))

## [1.2.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.1.0...v1.2.0) (2023-11-06)

### Features

- add textColor and highlightColor annotation schemas ([4b850d9](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/4b850d94f53f38dca0b83b233dbf65d7a0e1d058))

## [1.1.0](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.0.1...v1.1.0) (2023-06-07)

### Features

- enable alpha slider on color picker ([7f6177d](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/7f6177d76e22aa81e9bb83e813d5279e7f327545))

## [1.0.1](https://github.com/cositehq/sanity-plugin-simpler-color-input/compare/v1.0.0...v1.0.1) (2023-06-01)

### Bug Fixes

- update version # ([3c70360](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/3c703606271fb857163d39dc2f50c3425972c939))

## 1.0.0 (2023-06-01)

### Features

- clear button, refactor allowCustomValue ([d93942f](https://github.com/cositehq/sanity-plugin-simpler-color-input/commit/d93942f9b49dcc256a45d7f0d2ab88dfffc9685e))

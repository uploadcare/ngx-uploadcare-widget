## [3.0.2](https://github.com/uploadcare/ngx-uploadcare-widget/compare/v3.0.1...v3.0.2) (2022-02-22)


### Bug Fixes

* wildcard angular version ([#85](https://github.com/uploadcare/ngx-uploadcare-widget/issues/85)) ([29c745e](https://github.com/uploadcare/ngx-uploadcare-widget/commit/29c745ef5f2e95354ee64719eb2b472297a53935))



## [3.0.1](https://github.com/uploadcare/ngx-uploadcare-widget/compare/v3.0.0...v3.0.1) (2021-07-01)

### Changed

* fix shipjs trigger workflow ([519bb9e](https://github.com/uploadcare/ngx-uploadcare-widget/commit/519bb9e52a6be86cbacd84b709dff22fd8860858))

# [3.0.0](https://github.com/uploadcare/ngx-uploadcare-widget/compare/v2.0.2...v3.0.0) (2021-07-01)

### BREAKING CHANGES

* Update to Angular 12 [#68](https://github.com/uploadcare/ngx-uploadcare-widget/issues/68) ([ba67f9e](https://github.com/uploadcare/ngx-uploadcare-widget/commit/ba67f9ee44fc1a627fbfc192f9517493779e9dc8)), closes [#67](https://github.com/uploadcare/ngx-uploadcare-widget/issues/67)



## [2.0.2](https://github.com/uploadcare/ngx-uploadcare-widget/compare/v2.0.1...v2.0.2) (2020-04-14)

### Changed

* Fix ShipJS config

## [2.0.1](https://github.com/uploadcare/ngx-uploadcare-widget/compare/v2.0.0...v2.0.1) (2020-04-14)

### Changed

* Bump `uploadcare-widget` package
* Setup ShipJS config

## 2.0.0 - 2020-04-14

### Changed

* Completely replace custom build with the default Angular one (`ng build`) to support Ivy compiler.
  See [issue #37](https://github.com/uploadcare/ngx-uploadcare-widget/issues/37)

## 1.2.5 - 2019-09-04

### Added

* GitHub [issue #35](https://github.com/uploadcare/ngx-uploadcare-widget/issues/35),
  Added Angular Universal support.

## 1.2.4 - 2019-06-14

### Fixed

* GitHub [issue #33](https://github.com/uploadcare/ngx-uploadcare-widget/issues/33),
  Removed peer dependency warnings for 8.x versions of Angular.

## 1.2.3 - 2019-03-06

### Fixed

* GitHub [issue #30](https://github.com/uploadcare/ngx-uploadcare-widget/issues/30),
  `selectionPromise` on `widget.onChange()` was not defined when upload is canceled.

## 1.2.2 - 2018-10-23

### Fixed

* GitHub [issue #26](https://github.com/uploadcare/ngx-uploadcare-widget/issues/26),
  `Renderer2.destroyNode()` was called in production thus firing the
  `this.renderer.destroyNode is not a function` error.

## 1.2.1 - 2018-10-12

### Changed

* Now reject method closes the widget dialogs opened with internal markup button

## 1.2.0 - 2018-09-19

### Changed

* Added reject method

## 1.1.3 - 2018-08-10

### Changed

* Fixed .gitignore
* Rebuilded typings for --prod builds

## 1.1.2 - 2018-08-09

### Changed

* Fixed .gitignore
* Added missed typings folder to release

## 1.1.1 - 2018-08-09

### Changed

* Fixed typings link
* Removed unused files

## 1.1.0 - 2018-07-27

### Changed

* Fixed AOT compilation for production build.

### Added

* Added new `validators` widget attribute, now you can abort uploads mannualy by your decicion with validators.

## 1.0.1 - 2018-05-25

### Changed

* Implemented a new usage approach: you should now use a module, not a component directly.
* Updated README, added Table of Contents and new sections, “Security issues” and “Feedback”.
* The version of the widget in dependencies is `3.x` now.
* Added `integration` to the default widget config to provide info
  on the Angular version and wrapper version for User Agent with requests
  to [Uploadcare Upload API](https://uploadcare.com/docs/api_reference/upload/).

### Added

* Exported the Uploadcare widget API: you are now free to add directives.
* A new directive, `ngx-uploadcare-widget-custom` without any default markup.
  You can now use Uploadcare Widget with your own.
* New `openDialog()` method to both directives.
* New `on-progress` event to both directives.
* The `AUTHORS.txt` file to the repo to give credit to those contributing to
  the project. Yoo-hoo, thanks folks 💛

## 1.0.0 - 2018-05-25

Failed npm release. Please, don't use it.

## 0.2.1 - 2018-03-28

Fix release.

### Changed

* Fixed issue of reinit component on IE
* Updated unit tests. Coverage summary up to 100%
* Updated [Demo](/demo) projects with usage examples.

## 0.2.0 - 2018-03-14

Added support for interactions

### Added

* `clearUploads()` a method that removes all current uploads from the widget: "clears" it.
**Please note:** When you remove current uploads from a widget, the files are not removed from your UC project defined by its public key.
* `reset()` a method allowing for the manual widget reset.

### Changed

* The component is now interactive: your widget accepts the changes in input parameters.
* Updated README with info about install, usage, etc.
* Updated [Demo](/demo) projects with usage examples.

## 0.1.3 - 2018-02-08

Initial public release.

### Added

* The `ngx-uploadcare-widget` component.
* README with info about install, usage, etc.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased



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

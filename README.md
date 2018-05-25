# ngx-uploadcare-widget

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget">
  <img align="right" width="64" height="64"
       src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
       alt="">
</a>

Angular 2+ wrapper for [Uploadcare Widget][uc-features-widget].

[![NPM version][npm-img]][npm-url]
[![Build Status][travis-img]][travis-url]
[![Uploadcare stack on StackShare][stack-img]][stack-url]

Uploadcare Widget is an HTML5 file uploader, a part of the
[Uploadcare][uc-home] ecosystem.

<!-- toc -->

* [Install](#install)
* [Usage](#usage)
* [Configuration](#configuration)
* [Localization](#localization)
* [Security issues](#security-issues)
* [Feedback](#feedback)

<!-- tocstop -->

## Install

```bash
npm install ngx-uploadcare-widget
```

## Usage

The basic wrapper usage scenario can be described in four steps.

### Step 1. Import the module

```typescript
import { UcWidgetModule } from 'ngx-uploadcare-widget';
```

### Step 2. Import the module to yours

```typescript
@NgModule({
  imports: [
    ...,
    UcWidgetModule,
  ],
  ...
})
...
```

### Step 3. Use the component in your template

```html
<!- with default markup->
<ngx-uploadcare-widget
  images-only="true"
  public-key="YOUR_PUBLIC_KEY">
</ngx-uploadcare-widget>

<!- without any markup->
<ngx-uploadcare-widget-custom
  images-only="true"
  public-key="YOUR_PUBLIC_KEY">
</ngx-uploadcare-widget-custom>

```

### Step 4. Have fun with the widget events

The component currently supports three widget events:

* `on-change`
* `on-upload-complete`
* `on-progress`

Here is how you can handle those three,

```html
<ngx-uploadcare-widget
  images-only="true"
  public-key="demopublickey"
  (on-upload-complete)="yourOnUploadHandler($event)"
  (on-change)="yourOnChangeHandler($event)"
  (on-progress)="yourOnProgressHandler($event)">
</ngx-uploadcare-widget>
```

You can learn more about this widget events in our
[docs][uc-docs-js-api-widget-on-change].

## Configuration

### Supported input attributes

All the following attributes correspond to the ones listed in the
[widget docs][uc-docs-widget-config], but without the `data-` prefix.

* [public-key][uc-docs-widget-options-public-key]
* [multiple][uc-docs-widget-options-multiple]
* [multiple-max][uc-docs-widget-options-multiple-max]
* [multiple-min][uc-docs-widget-options-multiple-min]
* [images-only][uc-docs-widget-options-images-only]
* [preview-step][uc-docs-widget-options-preview-step]
* [crop][uc-docs-widget-options-crop]
* [image-shrink][uc-docs-widget-options-image-shrink]
* [clearable][uc-docs-widget-options-clearable]
* [tabs][uc-docs-widget-options-tabs]
* [input-accept-types][uc-docs-widget-options-input-accept-types]
* [preferred-types][uc-docs-widget-options-preferred-types]
* [system-dialog][uc-docs-widget-options-system-dialog]
* [secure-signature][uc-docs-widget-options-secure-signature]
* [secure-expire][uc-docs-widget-options-secure-expire]
* [value][uc-docs-widget-predefined]
* [cdn-base][uc-docs-widget-options-cdn-base]
* [do-not-store][uc-docs-widget-options-do-not-store]

### Events

* [on-upload-complete][uc-docs-js-api-widget-on-upload-complete]
* [on-change][uc-docs-js-api-widget-on-change]
* on-progress - fired several times while upload with progress data.

Events usage example:

```javascript
  onUpload(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
  }

  onProgress(progress) {
    console.log('fired Event "onProgress with data:"');
    console.log(progress);
  }

  onChange(file) {
    if(!file) {
      return;
    }
    console.log('fired Event "onChange"');
  // input file parameter depends on "multiple-files" widget attribute
    if(this.multipleFiles) {
  //  file contains 2 methods:
  //  .promise() - returns the general promise for all uploaded files which resolves into an uploaded file group info
  //  .files() - returns an array of promises: one per each uploaded file. Each promise resolves into an uploaded file info
      console.log(file);
      if(file.promise) {
        file.promise().then((groupInfo) => {
          console.log('resolved general promise from "onChange" with data:');
          console.log(groupInfo);
        });
      }
      if(file.files) {
        file.files().forEach((promise) => {
          promise.then((fileInfo) => {
            console.log('resolves file promise with file info:');
            console.log(fileInfo);
          });
        });
      } else {
  // file contains uploaded file info
        console.log(file);
      }
    }
  }

```

### Methods

The components provides following public methods:

* `clearUploads()` - Removes all current uploads from the widget. You can use the method to reset a form even if a user has already uploaded some files.
* `reset(clearUploads = false)` - Resets the widget, You can also remove all the current uploads if `clearUploads` is set to `true`
* `openDilaog()` - Opens Uploadcare widget dialog with current configuration.

All methods are accessible from a parent component via the `@ViewChild()` approach.

## Localization

It is possible that your locale is not available in the widget yet. If that’s
the case, contributing your locale might be a good idea. This can be done by
forking the [main repository][github-widget] and adding a localization file
[here][github-widget-files-locales].

The quick way of implementing your locale would be overriding any of the
existing ones via the [`UPLOADCARE_LOCALE_TRANSLATIONS`][uc-docs-widget-locales]
property.

## Security issues

If you think you ran into something in Uploadcare libraries which might have
security implications, please hit us up at [bugbounty@uploadcare.com][uc-email-bounty]
or Hackerone.

We'll contact you personally in a short time to fix an issue through co-op and
prior to any public disclosure.

## Feedback

Issues and PRs are welcome. You can provide your feedback or drop us a support
request at [hello@uploadcare.com][uc-email-hello].

[npm-img]: http://img.shields.io/npm/v/ngx-uploadcare-widget.svg
[npm-url]: https://www.npmjs.org/package/ngx-uploadcare-widget
[travis-img]: https://api.travis-ci.org/uploadcare/ngx-uploadcare-widget.svg?branch=master
[travis-url]: https://travis-ci.org/uploadcare/ngx-uploadcare-widget
[stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stack-url]: https://stackshare.io/uploadcare/stacks/
[github-widget]: https://github.com/uploadcare/uploadcare-widget
[github-widget-files-locales]: https://github.com/uploadcare/uploadcare-widget/tree/master/app/assets/javascripts/uploadcare/locale
[uc-email-bounty]: mailto:bugbounty@uploadcare.com
[uc-email-hello]: mailto:hello@uploadcare.com
[uc-home]: https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[uc-features-widget]: https://uploadcare.com/features/widget/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[uc-docs-widget-locales]: https://uploadcare.com/docs/uploads/widget/locales/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[uc-docs-widget-config]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[uc-docs-widget-predefined]: https://uploadcare.com/docs/uploads/widget/predefined/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[uc-docs-widget-options-public-key]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-public-key
[uc-docs-widget-options-multiple]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-multiple
[uc-docs-widget-options-multiple-max]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-multiple-max
[uc-docs-widget-options-multiple-min]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-multiple-min
[uc-docs-widget-options-images-only]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-images-only
[uc-docs-widget-options-preview-step]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-preview-step
[uc-docs-widget-options-crop]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-crop
[uc-docs-widget-options-image-shrink]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-image-shrink
[uc-docs-widget-options-clearable]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-clearable
[uc-docs-widget-options-tabs]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-tabs
[uc-docs-widget-options-input-accept-types]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-input-accept-types
[uc-docs-widget-options-preferred-types]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-preferred-types
[uc-docs-widget-options-system-dialog]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-system-dialog
[uc-docs-widget-options-secure-signature]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-secure-signature
[uc-docs-widget-options-secure-expire]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-secure-expire
[uc-docs-widget-options-cdn-base]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-cdn-base
[uc-docs-widget-options-do-not-store]: https://uploadcare.com/docs/uploads/widget/config/?utm_source=github&utm_campaign=ngx-uploadcare-widget#option-do-not-store
[uc-docs-js-api-widget-on-upload-complete]: https://uploadcare.com/docs/api_reference/javascript/widget/?utm_source=github&utm_campaign=ngx-uploadcare-widget#widget-on-upload-complete
[uc-docs-js-api-widget-on-change]: https://uploadcare.com/docs/api_reference/javascript/widget/?utm_source=github&utm_campaign=ngx-uploadcare-widget#widget-on-change

# ngx-uploadcare-widget

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget">
  <img align="right" width="64" height="64"
       src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
       alt="">
</a>

Angular 2+ wrapper for [Uploadcare Widget][widget].

[![NPM version][npm-img]][npm-link] [![Build Status][travis-img]][travis] [![Uploadcare stack on StackShare][stack-img]][stack]

[npm-img]: http://img.shields.io/npm/v/ngx-uploadcare-widget.svg
[npm-link]: https://www.npmjs.org/package/ngx-uploadcare-widget
[travis-img]: https://api.travis-ci.org/uploadcare/ngx-uploadcare-widget.svg?branch=master
[travis]: https://travis-ci.org/uploadcare/ngx-uploadcare-widget
[stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stack]: https://stackshare.io/uploadcare/stacks/

Uploadcare Widget is an HTML5 file uploader, a part of the
[Uploadcare][uploadcare] ecosystem.

## Install

```
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
[docs][docs-widget-js-change].

## Configuration

### Supported input attributes

All the following attributes correspond to the ones listed in the
[widget docs][docs-widget-config], but without the `data-` prefix.

* [public-key](https://uploadcare.com/docs/uploads/widget/config/#option-public-key)
* [multiple](https://uploadcare.com/docs/uploads/widget/config/#option-multiple)
* [multiple-max](https://uploadcare.com/docs/uploads/widget/config/#option-multiple-max)
* [multiple-min](https://uploadcare.com/docs/uploads/widget/config/#option-multiple-min)
* [images-only](https://uploadcare.com/docs/uploads/widget/config/#option-images-only)
* [preview-step](https://uploadcare.com/docs/uploads/widget/config/#option-preview-step)
* [crop](https://uploadcare.com/docs/uploads/widget/config/#option-crop)
* [image-shrink](https://uploadcare.com/docs/uploads/widget/config/#option-image-shrink)
* [clearable](https://uploadcare.com/docs/uploads/widget/config/#option-clearable)
* [tabs](https://uploadcare.com/docs/uploads/widget/config/#option-tabs)
* [input-accept-types](https://uploadcare.com/docs/uploads/widget/config/#option-input-accept-types)
* [preferred-types](https://uploadcare.com/docs/uploads/widget/config/#option-preferred-types)
* [system-dialog](https://uploadcare.com/docs/uploads/widget/config/#option-system-dialog)
* [secure-signature](https://uploadcare.com/docs/uploads/widget/config/#option-secure-signature)
* [secure-expire](https://uploadcare.com/docs/uploads/widget/config/#option-secure-expire)
* [value](https://uploadcare.com/documentation/widget/v2/#input-value)
* [cdn-base](https://uploadcare.com/docs/uploads/widget/config/#option-cdn-base)
* [do-not-store](https://uploadcare.com/docs/uploads/widget/config/#option-do-not-store)

### Events

* [on-upload-complete](https://uploadcare.com/docs/api_reference/javascript/widget/#widget-on-upload-complete)
* [on-change](https://uploadcare.com/docs/api_reference/javascript/widget/#widget-on-change)
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
forking the [main repository][widget] and adding a localization file
[here][widget-locales].

The quick way of implementing your locale would be overriding any of the
existing ones via the [`UPLOADCARE_LOCALE_TRANSLATIONS`][docs-widget-locales]
property.

[widget]: https://github.com/uploadcare/uploadcare-widget
[uploadcare]: https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[widget-locales]: https://github.com/uploadcare/uploadcare-widget/tree/master/app/assets/javascripts/uploadcare/locale
[docs-widget-locales]: https://uploadcare.com/docs/uploads/widget/locales/
[docs-widget-js-change]: https://uploadcare.com/docs/api_reference/javascript/widget/#widget-on-change
[docs-widget-config]: https://uploadcare.com/docs/uploads/widget/config/

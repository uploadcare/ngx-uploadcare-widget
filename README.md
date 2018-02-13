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

### Step 1. Import the component

```typescript
import { UcWidgetComponent } from 'ngx-uploadcare-widget';
```

### Step 2. Add the component to your module

```typescript
@NgModule({
  declarations: [
    ...,
    UcWidgetComponent,
  ],
  ...
})
...
```

### Step 3. Use the component in your template

```html
<ngx-uploadcare-widget
  images-only="true"
  public-key="YOUR_PUBLIC_KEY">
</ngx-uploadcare-widget>
```

### Step 4. Have fun with the widget events

The component currently supports two widget events:

* `on-change`
* `on-upload-complete`

Here is how you can handle those two,
 
```html
<ngx-uploadcare-widget
  images-only="true"
  public-key="demopublickey"
  (on-upload-complete)="yourOnUploadHandler($event)"
  (on-change)="yourOnChangeHandler($event)">
</ngx-uploadcare-widget>
```

You can learn more about the two widget events in our
[docs][docs-widget-js-change].
 
## Configuration

**Please note:** for now, the component only supports one-time initialization.
If you change any of the attributes at runtime, they will not affect the widget.
The behavior is temporary and will be fixed in the future release.

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

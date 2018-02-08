# ngx-uploadcare-widget

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget">
    <img align="right" width="64" height="64"
         src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
         alt="">
</a>

Angular 2+ wrapper for [Uploadcare Widget][widget].

[![Uploadcare stack on StackShare][stack-img]][stack]

[stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stack]: https://stackshare.io/uploadcare/stacks/

Uploadcare Widget is an HTML5 file uploader
which itself is a part of [Uploadcare][uploadcare] ecosystem.

## Install

```
npm install ngx-uploadcare-widget
```

## Usage

```html
<ngx-uploadcare-widget
  [images-only]="imagesOnly"
  [public-key]="publicKey"
  (on-upload-complete)="onUpload($event)"
  (on-change)="onChange($event)">
</ngx-uploadcare-widget>
```

## Configuration

## Localization

It’s possible that your locale is not available in the widget yet.
If that’s the case, contributing your locale might be a good idea.
This can be done by forking the [main repository](https://github.com/uploadcare/uploadcare-widget)
and adding a localization file
[here][widget-locales].

Until that you can use [`UPLOADCARE_LOCALE_TRANSLATIONS`][docs-widget-locales] property
to use your locale immediately.

[widget]: https://github.com/uploadcare/uploadcare-widget
[uploadcare]: https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[widget-locales]: https://github.com/uploadcare/uploadcare-widget/tree/master/app/assets/javascripts/uploadcare/locale
[docs-widget-locales]: https://uploadcare.com/docs/uploads/widget/locales/

import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import uploadcare from 'uploadcare-widget';

@Component({
  selector: 'ngx-uploadcare-widget',
  template:  `<input type="hidden"
                attr.data-public-key={{publicKey}}
                [attr.data-multiple]="multiple"
                [attr.data-multiple-max]="multipleMax"
                [attr.data-multiple-min]="multipleMin"
                [attr.data-images-only]="imagesOnly"
                [attr.data-preview-step]="previewStep"
                [attr.data-crop]="crop"
                [attr.data-image-shrink]="imageShrink"
                [attr.data-clearable]="clearable"
                [attr.data-tabs]="tabs"
                [attr.data-input-accept-types]="inputAcceptTypes"
                [attr.data-preferred-types]="preferredTypes"
                [attr.data-system-dialog]="systemDialog"
                [attr.data-secure-signature]="secureSignature"
                [attr.data-secure-expire]="secureExpire"
                [attr.data-cdn-base]="cdnBase"
                [value]="value"
                [attr.data-do-not-store]="doNotStore"
              />`,
})
export class UcWidgetComponent implements AfterViewInit {
  @Input('public-key') publicKey = 'demopublickey';
  @Input('multiple') multiple: boolean;
  @Input('multiple-max') multipleMax: number;
  @Input('multiple-min') multipleMin: number;
  @Input('images-only') imagesOnly: boolean;
  @Input('preview-step') previewStep: boolean;
  @Input('crop') crop: any;
  @Input('image-shrink') imageShrink: string;
  @Input('clearable') clearable: boolean;
  @Input('tabs') tabs: string;
  @Input('input-accept-types') inputAcceptTypes: string;
  @Input('preferred-types') preferredTypes: string;
  @Input('system-dialog') systemDialog: boolean;
  @Input('secure-signature') secureSignature: string;
  @Input('secure-expire') secureExpire: string;
  @Input('value') value = null;
  @Input('cdn-base') cdnBase = null;
  @Input('do-not-store') doNotStore: boolean;
  @Output('on-upload-complete') onUploadComplete = new EventEmitter<any>();
  @Output('on-change') onChange = new EventEmitter<any>();
  
  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  ngAfterViewInit() {
    const inputElement = uploadcare.jQuery(this.element.nativeElement).children('input')[0];
    const widget = uploadcare.Widget(inputElement);
    const that = this;
    widget.onUploadComplete(function(fileInfo) {
       that.onUploadComplete.emit(fileInfo);
    });
    widget.onChange(function(promise) {
      that.onChange.emit(promise);
   });
  }
}

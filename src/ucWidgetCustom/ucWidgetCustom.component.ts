import {
  Component,
  Input,
  Output,
  EventEmitter,
  VERSION,
} from '@angular/core';
import uploadcare from 'uploadcare-widget';

const pkg = require('../../package.json');
const APP_VERSION = JSON.stringify(pkg.version);
uploadcare.start({ integration: `Angular/${VERSION.full}; Ngx-Uploadcare-Widget/${APP_VERSION}` });

@Component({
  selector: 'ngx-uploadcare-widget-custom',
  template: '',
})
export class UcWidgetCustomComponent {
  @Output('on-upload-complete') onUploadComplete = new EventEmitter<any>();
  @Output('on-change') onChange = new EventEmitter<any>();
  @Output('on-progress') onProgress = new EventEmitter<any>();

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
  @Input('value') value: string;
  @Input('cdn-base') cdnBase: string;
  @Input('do-not-store') doNotStore: boolean;

  openDialog() {
    const config = {
      publicKey: this.publicKey ? this.publicKey : undefined,
      multiple: this.multiple,
      multipleMax: this.multipleMax,
      multipleMin: this.multipleMin,
      imagesOnly: this.imagesOnly,
      previewStep: this.previewStep,
      crop: this.crop ? this.crop : undefined,
      imageShrink: this.imageShrink ? this.imageShrink : undefined,
      clearable: this.clearable,
      tabs: this.tabs ? this.tabs : undefined,
      inputAcceptTypes: this.inputAcceptTypes ? this.inputAcceptTypes : undefined,
      preferredTypes: this.preferredTypes,
      systemDialog: this.systemDialog,
      secureSignature: this.secureSignature,
      secureExpire: this.secureExpire,
      value: this.value ? this.value : undefined,
      cdnBase: this.cdnBase ? this.cdnBase : undefined,
      doNotStore: this.doNotStore
    };
    const dialog = uploadcare.openDialog(this.value, null, config);
    dialog.done((selectionPromise) => {
      this.onChange.emit(selectionPromise);
      if (typeof selectionPromise.promise === 'function') {
        selectionPromise.promise()
          .then((groupInfo) => {
            this.onUploadComplete.emit(groupInfo);
          })
          .progress((progress) => {
            this.onProgress.emit(progress);
          });
      } else {
        selectionPromise
          .then((fileInfo) => {
            this.onUploadComplete.emit(fileInfo);
          })
          .progress((progress) => {
            this.onProgress.emit(progress);
          });
      }
    });
  }
}

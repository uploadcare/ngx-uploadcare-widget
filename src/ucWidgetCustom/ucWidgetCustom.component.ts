import { Component,
          Input,
          Output,
          EventEmitter,
          VERSION,
          PLATFORM_ID,
          Inject
} from '@angular/core';
import uploadcare from 'uploadcare-widget';
import { isPlatformBrowser} from '@angular/common';

const pkg = require('../../package.json');
const APP_VERSION = JSON.stringify(pkg.version);
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
  @Input('validators') validators: any[] = [];
  private dialog: any;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    const isInBrowser = isPlatformBrowser(platformId);
    if (isInBrowser) {
      uploadcare.start({integration: `Angular/${VERSION.full}; Ngx-Uploadcare-Widget/${APP_VERSION}`});
    }
  }

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
      doNotStore: this.doNotStore,
      validators: this.validators.filter(v => {
        if (typeof v !== 'function') {
          throw new Error('Only functions allowed in validadators array');
        }
        return v;
      }),
    };
    this.dialog = uploadcare.openDialog(this.value, null, config);
    this.dialog.done((selectionPromise) => {
      this.onChange.emit(selectionPromise);
      if(typeof selectionPromise.promise === 'function') {
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

  reject() {
    if(this.dialog) {
      this.dialog.reject();
      this.dialog = null;
    }
  }

}

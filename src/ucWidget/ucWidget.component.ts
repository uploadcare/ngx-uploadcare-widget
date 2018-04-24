import { Component,
          Input,
          Output,
          AfterViewInit,
          AfterViewChecked,
          ElementRef,
          EventEmitter,
          Renderer2,
          ViewChild } from '@angular/core';
import uploadcare from 'uploadcare-widget';
import { UcWidgetDefaultComponent } from '../ucWidgetDefault/ucWidgetDefault.component';
import { UcWidgetCustomComponent } from '../ucWidgetCustom/ucWidgetCustom.component';
import { Config } from '../common/config.interface';
import { CompilerConfig } from '@angular/compiler';

@Component({
  selector: 'ngx-uploadcare-widget',
  template:
  `<ngx-uploadcare-widget-default *ngIf="!hideDefaultButton" [config]="_config"></ngx-uploadcare-widget-default>
   <ngx-uploadcare-widget-custom *ngIf="hideDefaultButton" [config]="_config"></ngx-uploadcare-widget-custom>`,
})
export class UcWidgetComponent {
  @Output('on-upload-complete') onUploadComplete = new EventEmitter<any>();
  @Output('on-change') onChange = new EventEmitter<any>();
  @Input() hideDefaultButton = false;
  @Input() id: string;

  _config: Config;
  private element: ElementRef;
  private inputElement: Node;
  private renderer: Renderer2;
  private widget: any;
  private _publicKey = 'demopublickey';
  private _multiple: boolean;
  private _multipleMax: number;
  private _multipleMin: number;
  private _imagesOnly: boolean;
  private _previewStep: boolean;
  private _crop: any;
  private _imageShrink: string;
  private _clearable: boolean;
  private _tabs: string;
  private _inputAcceptTypes: string;
  private _preferredTypes: string;
  private _systemDialog: boolean;
  private _secureSignature: string;
  private _secureExpire: string;
  private _value = null;
  private _cdnBase = null;
  private _doNotStore: boolean;
  private _reinitRequired = false;
  private _isClearValue = false;
  @ViewChild(UcWidgetDefaultComponent)
  private widgetComponentDefault: UcWidgetDefaultComponent;
  @ViewChild(UcWidgetCustomComponent)
  private widgetCustomComponent: UcWidgetCustomComponent;

  constructor(renderer: Renderer2, element: ElementRef) {
    this.element = element;
    this.renderer = renderer;
    this._config = {};
  }

  @Input('public-key') 
  set publicKey(publicKey: string) {
    this._config = {
      ...this._config,
      publicKey
    };
  }
  get publicKey() { return this._config.publicKey; }

  @Input('multiple')
  set multiple(multiple: boolean) {
    this._config = {
      ...this._config,
      multiple
    };
  }
  get multiple() { return this._config.multiple; }

  @Input('multiple-max')
  set multipleMax(multipleMax: number) {
    this._config = {
      ...this._config,
      multipleMax
    };
  }
  get multipleMax() { return this._config.multipleMax; }

  @Input('multiple-min')
  set multipleMin(multipleMin: number) {
    this._config = {
      ...this._config,
      multipleMin
    };
  }
  get multipleMin() { return this._config.multipleMin; }

  @Input('images-only')
  set imagesOnly(imagesOnly: boolean) {
    this._config = {
      ...this._config,
      imagesOnly
    };
  }
  get imagesOnly() { return this._config.imagesOnly; }

  @Input('preview-step')
  set previewStep(previewStep: boolean) {
    this._config = {
      ...this._config,
      previewStep
    };
  }
  get previewStep() { return this._config.previewStep; }

  @Input('crop')
  set crop(crop: any) {
    this._config = {
      ...this._config,
      crop
    };
  }
  get crop() { return this._config.crop; }

  @Input('image-shrink')
  set imageShrink(imageShrink: string) {
    this._config = {
      ...this._config,
      imageShrink
    };
  }
  get imageShrink() { return this._config.imageShrink; }

  @Input('clearable')
  set clearable(clearable: boolean) {
    this._config = {
      ...this._config,
      clearable
    };
  }
  get clearable() { return this._config.clearable; }

  @Input('tabs')
  set tabs(tabs: string) {
    this._config = {
      ...this._config,
      tabs
    };
  }
  get tabs() { return this._config.tabs; }

  @Input('input-accept-types')
  set inputAcceptTypes(inputAcceptTypes: string) {
    this._config = {
      ...this._config,
      inputAcceptTypes
    };
  }
  get inputAcceptTypes() { return this._config.inputAcceptTypes; }

  @Input('preferred-types')
  set preferredTypes(preferredTypes: string) {
    this._config = {
      ...this._config,
      preferredTypes
    };
  }
  get preferredTypes() { return this._config.preferredTypes; }

  @Input('system-dialog')
  set systemDialog(systemDialog: boolean) {
    this._config = {
      ...this._config,
      systemDialog
    };
  }
  get systemDialog() { return this._config.systemDialog; }

  @Input('secure-signature')
  set secureSignature(secureSignature: string) {
    this._config = {
      ...this._config,
      secureSignature
    };
  }
  get secureSignature() { return this._config.secureSignature; }

  @Input('secure-expire')
  set secureExpire(secureExpire: string) {
    this._config = {
      ...this._config,
      secureExpire
    };
  }
  get secureExpire() { return this._config.secureExpire; }

  @Input('value')
  set value(value: string) {
    this._config = {
      ...this._config,
      value
    };
  }
  get value() { return this._config.value; }

  @Input('cdn-base')
  set cdnBase(cdnBase: string) {
    this._config = {
      ...this._config,
      cdnBase
    };
  }
  get cdnBase() { return this._config.cdnBase; }

  @Input('do-not-store')
  set doNotStore(doNotStore: boolean) {
    this._config = {
      ...this._config,
      doNotStore
    };
  }
  get doNotStore() { return this._config.doNotStore; }

  reset(clearUploads = false) {
    this.widgetComponentDefault.reset(clearUploads);
  }

  clearUploads() {
    this.widgetComponentDefault.clearUploads();
  }

  openDialog() {
    this.widgetCustomComponent.openDialog();
  }
}

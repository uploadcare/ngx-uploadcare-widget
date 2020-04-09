import { Component,
  Input,
  Output,
  AfterViewInit,
  AfterViewChecked,
  ElementRef,
  EventEmitter,
  Renderer2,
  VERSION, PLATFORM_ID, Inject } from '@angular/core';
import uploadcare from 'uploadcare-widget';
import { isPlatformBrowser} from '@angular/common';
import { APP_VERSION } from '../version';

@Component({
  selector: 'ngx-uploadcare-widget',
  template: '',
})
export class UcWidgetComponent implements AfterViewInit, AfterViewChecked {
  @Output('on-upload-complete') onUploadComplete = new EventEmitter<any>();
  @Output('on-change') onChange = new EventEmitter<any>();
  @Output('on-progress') onProgress = new EventEmitter<any>();

  private element: ElementRef;
  private inputElement: Node;
  private renderer: Renderer2;
  private widget: any;
  private dialog: any;
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
  private _validators = [];
  private isInBrowser: boolean;

  constructor(renderer: Renderer2, element: ElementRef, @Inject(PLATFORM_ID) platformId: string) {
    this.element = element;
    this.renderer = renderer;
    this.isInBrowser = isPlatformBrowser(platformId);
    if (this.isInBrowser) {
      uploadcare.start({integration: `Angular/${VERSION.full}; Ngx-Uploadcare-Widget/${APP_VERSION}`});
    }
  }

  @Input('public-key')
    set publicKey(publicKey: string) {
    this._publicKey = publicKey;
    this.setReinitFlag(true);
  }
  get publicKey() { return this._publicKey; }

  @Input('multiple')
    set multiple(multiple: boolean) {
    this._multiple = multiple;
    this.setReinitFlag(true);
  }
  get multiple() { return this._multiple; }

  @Input('multiple-max')
    set multipleMax(multipleMax: number) {
    this._multipleMax = multipleMax;
    this.setReinitFlag(false);
  }
  get multipleMax() { return this._multipleMax; }

  @Input('multiple-min')
    set multipleMin(multipleMin: number) {
    this._multipleMin = multipleMin;
    this.setReinitFlag(false);
  }
  get multipleMin() { return this._multipleMin; }

  @Input('images-only')
    set imagesOnly(imagesOnly: boolean) {
    this._imagesOnly = imagesOnly;
    this.setReinitFlag(false);
  }
  get imagesOnly() { return this._imagesOnly; }

  @Input('preview-step')
    set previewStep(previewStep: boolean) {
    this._previewStep = previewStep;
    this.setReinitFlag(false);
  }
  get previewStep() { return this._previewStep; }

  @Input('crop')
    set crop(crop: any) {
    this._crop = crop;
    this.setReinitFlag(false);
  }
  get crop() { return this._crop; }

  @Input('image-shrink')
    set imageShrink(imageShrink: string) {
    this._imageShrink = imageShrink;
    this.setReinitFlag(false);
  }
  get imageShrink() { return this._imageShrink; }

  @Input('clearable')
    set clearable(clearable: boolean) {
    this._clearable = clearable;
    this.setReinitFlag(false);
  }
  get clearable() { return this._clearable; }

  @Input('tabs')
    set tabs(tabs: string) {
    this._tabs = tabs;
    this.setReinitFlag(false);
  }
  get tabs() { return this._tabs; }

  @Input('input-accept-types')
    set inputAcceptTypes(inputAcceptTypes: string) {
    this._inputAcceptTypes = inputAcceptTypes;
    this.setReinitFlag(false);
  }
  get inputAcceptTypes() { return this._inputAcceptTypes; }

  @Input('preferred-types')
    set preferredTypes(preferredTypes: string) {
    this._preferredTypes = preferredTypes;
    this.setReinitFlag(false);
  }
  get preferredTypes() { return this._preferredTypes; }

  @Input('system-dialog')
    set systemDialog(systemDialog: boolean) {
    this._systemDialog = systemDialog;
    this.setReinitFlag(false);
  }
  get systemDialog() { return this._systemDialog; }

  @Input('secure-signature')
    set secureSignature(secureSignature: string) {
    this._secureSignature = secureSignature;
    this.setReinitFlag(true);
  }
  get secureSignature() { return this._secureSignature; }

  @Input('secure-expire')
    set secureExpire(secureExpire: string) {
    this._secureExpire = secureExpire;
    this.setReinitFlag(false);
  }
  get secureExpire() { return this._secureExpire; }

  @Input('value')
    set value(value: string) {
    this._value = value;
    if(this.widget) {
      this.setReinitFlag(false);
      this.widget.value(value);
    }
  }
  get value() { return this._value; }

  @Input('validators')
  set validators(validatorsArr: any[]) {
    this._validators = validatorsArr;
    this.setReinitFlag(false);
  }
  get validators() { return this._validators; }

  @Input('cdn-base')
    set cdnBase(cdnBase: string) {
    this._cdnBase = cdnBase;
    this.setReinitFlag(true);
  }
  get cdnBase() { return this._cdnBase; }

  @Input('do-not-store')
    set doNotStore(doNotStore: boolean) {
    this._doNotStore = doNotStore;
    this.setReinitFlag(false);
  }
  get doNotStore() { return this._doNotStore; }

  ngAfterViewInit() {
    if(this.isInBrowser) {
      this.widget = this.init();
    }
  }

  ngAfterViewChecked() {
    if(this._reinitRequired) {
      this.reset(this._isClearValue);
    }
  }

  reset(clearUploads = false) {
    this.destroy();
    this.widget = this.init(clearUploads);
    this._reinitRequired = false;
    this._isClearValue = false;
  }

  clearUploads() {
    this._value = null;
    if(this.widget) {
      this.widget.value(null);
    }
  }

  openDialog() {
    if(this.widget) {
      this.dialog = this.widget.openDialog();
    }
  }

  reject() {
    if(this.dialog) {
      this.dialog.reject();
      this.dialog = null;
    }
  }

  private setReinitFlag(isClearValue: boolean) {
    if(this.widget) {
      this._reinitRequired = true;
      this._isClearValue = isClearValue;
    }
  }

  private setInputAttr(key: string, value: any) {
    if (value) {
      this.renderer.setAttribute(this.inputElement, key, value);
    }
  }

  private initInputElement() {
    this.setInputAttr('type', 'hidden');
    this.setInputAttr('data-public-key', this._publicKey);
    this.setInputAttr('data-multiple', this._multiple);
    this.setInputAttr('data-multiple-max', this._multipleMax);
    this.setInputAttr('data-multiple-min', this._multipleMin);
    this.setInputAttr('data-images-only', this._imagesOnly);
    this.setInputAttr('data-preview-step', this._previewStep);
    this.setInputAttr('data-crop', this._crop);
    this.setInputAttr('data-image-shrink', this._imageShrink);
    this.setInputAttr('data-clearable', this._clearable);
    this.setInputAttr('data-tabs', this._tabs);
    this.setInputAttr('data-input-accept-types', this._inputAcceptTypes);
    this.setInputAttr('data-preferred-types', this._preferredTypes);
    this.setInputAttr('data-system-dialog', this._systemDialog);
    this.setInputAttr('data-secure-signature', this._secureSignature);
    this.setInputAttr('data-secure-expire', this._secureExpire);
    this.setInputAttr('data-cdn-base', this._cdnBase);
    this.setInputAttr('data-do-not-store', this._doNotStore);
    if(this._value) {
      this.renderer.setProperty(this.inputElement, 'value', this._value);
    }
  }

  private init(removeUploads = false) {
    this.inputElement = this.renderer.createElement('input');
    this.renderer.appendChild(this.element.nativeElement, this.inputElement);
    if(removeUploads) {
      this.clearUploads();
    }
    this.initInputElement();
    const widget = uploadcare.Widget(this.inputElement);
    this._validators.forEach(v => {
      if (typeof v === 'function') {
        widget.validators.push(v);
      } else {
        throw new Error('Only functions allowed in validadators array');
      }
    });
    widget.onUploadComplete((fileInfo) => {
      this.onUploadComplete.emit(fileInfo);
      this._value = fileInfo.uuid;
    });
    widget.onChange((selectionPromise) => {
      this.onChange.emit(selectionPromise);
      if (!selectionPromise) {
        return;
      }
      if(typeof selectionPromise.promise === 'function') {
        selectionPromise.promise()
          .progress((progress) => {
            this.onProgress.emit(progress);
          });
      } else {
        selectionPromise
          .progress((progress) => {
            this.onProgress.emit(progress);
          });
      }
    });
    widget.onDialogOpen((dialogApi) => {
      this.dialog = dialogApi;
    });
    return widget;
  }

  private destroy() {
    const $ = uploadcare.jQuery;
    $(this.widget.inputElement.nextSibling).remove();
    $(this.widget.inputElement).clone().appendTo($(this.element.nativeElement));
    $(this.widget.inputElement).remove();
    this.renderer.removeChild(this.element.nativeElement, this.element.nativeElement.children[0]);
    delete this.widget;
  }
}

import { Component,
          Input,
          Output,
          AfterViewInit,
          AfterViewChecked,
          ElementRef,
          EventEmitter,
          Renderer2,
          // ContentChildren, 
          // QueryList,
          // Directive,
          } from '@angular/core';
import uploadcare from 'uploadcare-widget';
import { Config } from '../common/config.interface';

@Component({
  selector: 'ngx-uploadcare-widget-default',
  template: '',
})
export class UcWidgetDefaultComponent implements AfterViewInit, AfterViewChecked {
  @Output('on-upload-complete') onUploadComplete = new EventEmitter<any>();
  @Output('on-change') onChange = new EventEmitter<any>();
  private _config: Config;
  private element: ElementRef;
  private inputElement: Node;
  private renderer: Renderer2;
  private widget: any;
  private _reinitRequired: boolean;
  private _isClearValue: boolean;

  constructor(renderer: Renderer2, element: ElementRef) {
    this.element = element;
    this.renderer = renderer;
    this._config = {};
  }

  @Input('config')
  set config(_config: Config) {
    this._config = { ..._config };
    this.setReinitFlag(true);
    if(this.widget) {
      this.setReinitFlag(false);
      this.widget.value(_config.value);
    }

  }
  get config() { return this._config; }

  ngAfterViewInit() {
    this.widget = this.init();
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
    this._config.value = null;
    if(this.widget) {
      this.widget.value(null);
    }
  }

  openDialog() {
    if(this.widget) {
      this.widget.openDialog();
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
    this.setInputAttr('data-public-key', this._config.publicKey);
    this.setInputAttr('data-multiple', this._config.multiple);
    this.setInputAttr('data-multiple-max', this._config.multipleMax);
    this.setInputAttr('data-multiple-min', this._config.multipleMin);
    this.setInputAttr('data-images-only', this._config.imagesOnly);
    this.setInputAttr('data-preview-step', this._config.previewStep);
    this.setInputAttr('data-crop', this._config.crop);
    this.setInputAttr('data-image-shrink', this._config.imageShrink);
    this.setInputAttr('data-clearable', this._config.clearable);
    this.setInputAttr('data-tabs', this._config.tabs);
    this.setInputAttr('data-input-accept-types', this._config.inputAcceptTypes);
    this.setInputAttr('data-preferred-types', this._config.preferredTypes);
    this.setInputAttr('data-system-dialog', this._config.systemDialog);
    this.setInputAttr('data-secure-signature', this._config.secureSignature);
    this.setInputAttr('data-secure-expire', this._config.secureExpire);
    this.setInputAttr('data-cdn-base', this._config.cdnBase);
    this.setInputAttr('data-do-not-store', this._config.doNotStore);
    if(this._config.value) {
      this.renderer.setProperty(this.inputElement, 'value', this._config.value);
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
    widget.onUploadComplete((fileInfo) => {
      this.onUploadComplete.emit(fileInfo);
      this._config.value = fileInfo.uuid;
    });
    widget.onChange((promise) => {
      this.onChange.emit(promise);
    });
    return widget;
  }

  private destroy() {
    const $ = uploadcare.jQuery;
    $(this.widget.inputElement.nextSibling).remove();
    $(this.widget.inputElement).clone().appendTo($(this.element.nativeElement));
    $(this.widget.inputElement).remove();
    this.renderer.destroyNode(this.inputElement);
    this.renderer.removeChild(this.element.nativeElement, this.element.nativeElement.children[0]);
    delete this.widget;
  }
}

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
  selector: 'ngx-uploadcare-widget-custom',
  template: '',
})
export class UcWidgetCustomComponent {
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
    if (!_config.tabs) {
      _config.tabs = 'file camera url facebook gdrive gphotos dropbox instagram evernote flickr skydrive';
    }
    if (!_config.crop) {
      _config.crop = null;
    }
    this._config = { ..._config };
  }
  get config() { return this._config; }

  openDialog() {
    const dialog = uploadcare.openDialog(null, null, this._config);
  }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ElementRef, EventEmitter, Renderer2, VERSION } from '@angular/core';
import uploadcare from 'uploadcare-widget';
var pkg = require('../../package.json');
var APP_VERSION = JSON.stringify(pkg.version);
uploadcare.start({ integration: "Angular/" + VERSION.full + "; Ngx-Uploadcare-Widget/" + APP_VERSION });
var UcWidgetComponent = /** @class */ (function () {
    function UcWidgetComponent(renderer, element) {
        this.onUploadComplete = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onProgress = new EventEmitter();
        this._publicKey = 'demopublickey';
        this._value = null;
        this._cdnBase = null;
        this._reinitRequired = false;
        this._isClearValue = false;
        this._validators = [];
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(UcWidgetComponent.prototype, "publicKey", {
        get: function () { return this._publicKey; },
        set: function (publicKey) {
            this._publicKey = publicKey;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "multiple", {
        get: function () { return this._multiple; },
        set: function (multiple) {
            this._multiple = multiple;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "multipleMax", {
        get: function () { return this._multipleMax; },
        set: function (multipleMax) {
            this._multipleMax = multipleMax;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "multipleMin", {
        get: function () { return this._multipleMin; },
        set: function (multipleMin) {
            this._multipleMin = multipleMin;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "imagesOnly", {
        get: function () { return this._imagesOnly; },
        set: function (imagesOnly) {
            this._imagesOnly = imagesOnly;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "previewStep", {
        get: function () { return this._previewStep; },
        set: function (previewStep) {
            this._previewStep = previewStep;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "crop", {
        get: function () { return this._crop; },
        set: function (crop) {
            this._crop = crop;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "imageShrink", {
        get: function () { return this._imageShrink; },
        set: function (imageShrink) {
            this._imageShrink = imageShrink;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "clearable", {
        get: function () { return this._clearable; },
        set: function (clearable) {
            this._clearable = clearable;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "tabs", {
        get: function () { return this._tabs; },
        set: function (tabs) {
            this._tabs = tabs;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "inputAcceptTypes", {
        get: function () { return this._inputAcceptTypes; },
        set: function (inputAcceptTypes) {
            this._inputAcceptTypes = inputAcceptTypes;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "preferredTypes", {
        get: function () { return this._preferredTypes; },
        set: function (preferredTypes) {
            this._preferredTypes = preferredTypes;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "systemDialog", {
        get: function () { return this._systemDialog; },
        set: function (systemDialog) {
            this._systemDialog = systemDialog;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "secureSignature", {
        get: function () { return this._secureSignature; },
        set: function (secureSignature) {
            this._secureSignature = secureSignature;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "secureExpire", {
        get: function () { return this._secureExpire; },
        set: function (secureExpire) {
            this._secureExpire = secureExpire;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            this._value = value;
            if (this.widget) {
                this.setReinitFlag(false);
                this.widget.value(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "validators", {
        get: function () { return this._validators; },
        set: function (validatorsArr) {
            this._validators = validatorsArr;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "cdnBase", {
        get: function () { return this._cdnBase; },
        set: function (cdnBase) {
            this._cdnBase = cdnBase;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "doNotStore", {
        get: function () { return this._doNotStore; },
        set: function (doNotStore) {
            this._doNotStore = doNotStore;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    UcWidgetComponent.prototype.ngAfterViewInit = function () {
        this.widget = this.init();
    };
    UcWidgetComponent.prototype.ngAfterViewChecked = function () {
        if (this._reinitRequired) {
            this.reset(this._isClearValue);
        }
    };
    UcWidgetComponent.prototype.reset = function (clearUploads) {
        if (clearUploads === void 0) { clearUploads = false; }
        this.destroy();
        this.widget = this.init(clearUploads);
        this._reinitRequired = false;
        this._isClearValue = false;
    };
    UcWidgetComponent.prototype.clearUploads = function () {
        this._value = null;
        if (this.widget) {
            this.widget.value(null);
        }
    };
    UcWidgetComponent.prototype.openDialog = function () {
        if (this.widget) {
            this.dialog = this.widget.openDialog();
        }
    };
    UcWidgetComponent.prototype.reject = function () {
        if (this.dialog) {
            this.dialog.reject();
            this.dialog = null;
        }
    };
    UcWidgetComponent.prototype.setReinitFlag = function (isClearValue) {
        if (this.widget) {
            this._reinitRequired = true;
            this._isClearValue = isClearValue;
        }
    };
    UcWidgetComponent.prototype.setInputAttr = function (key, value) {
        if (value) {
            this.renderer.setAttribute(this.inputElement, key, value);
        }
    };
    UcWidgetComponent.prototype.initInputElement = function () {
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
        if (this._value) {
            this.renderer.setProperty(this.inputElement, 'value', this._value);
        }
    };
    UcWidgetComponent.prototype.init = function (removeUploads) {
        var _this = this;
        if (removeUploads === void 0) { removeUploads = false; }
        this.inputElement = this.renderer.createElement('input');
        this.renderer.appendChild(this.element.nativeElement, this.inputElement);
        if (removeUploads) {
            this.clearUploads();
        }
        this.initInputElement();
        var widget = uploadcare.Widget(this.inputElement);
        this._validators.forEach(function (v) {
            if (typeof v === 'function') {
                widget.validators.push(v);
            }
            else {
                throw new Error('Only functions allowed in validadators array');
            }
        });
        widget.onUploadComplete(function (fileInfo) {
            _this.onUploadComplete.emit(fileInfo);
            _this._value = fileInfo.uuid;
        });
        widget.onChange(function (selectionPromise) {
            _this.onChange.emit(selectionPromise);
            if (typeof selectionPromise.promise === 'function') {
                selectionPromise.promise()
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
            else {
                selectionPromise
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
        });
        widget.onDialogOpen(function (dialogApi) {
            _this.dialog = dialogApi;
        });
        return widget;
    };
    UcWidgetComponent.prototype.destroy = function () {
        var $ = uploadcare.jQuery;
        $(this.widget.inputElement.nextSibling).remove();
        $(this.widget.inputElement).clone().appendTo($(this.element.nativeElement));
        $(this.widget.inputElement).remove();
        this.renderer.destroyNode(this.inputElement);
        this.renderer.removeChild(this.element.nativeElement, this.element.nativeElement.children[0]);
        delete this.widget;
    };
    __decorate([
        Output('on-upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onUploadComplete", void 0);
    __decorate([
        Output('on-change'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onChange", void 0);
    __decorate([
        Output('on-progress'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onProgress", void 0);
    __decorate([
        Input('public-key'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "publicKey", null);
    __decorate([
        Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "multiple", null);
    __decorate([
        Input('multiple-max'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], UcWidgetComponent.prototype, "multipleMax", null);
    __decorate([
        Input('multiple-min'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], UcWidgetComponent.prototype, "multipleMin", null);
    __decorate([
        Input('images-only'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "imagesOnly", null);
    __decorate([
        Input('preview-step'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "previewStep", null);
    __decorate([
        Input('crop'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UcWidgetComponent.prototype, "crop", null);
    __decorate([
        Input('image-shrink'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "imageShrink", null);
    __decorate([
        Input('clearable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "clearable", null);
    __decorate([
        Input('tabs'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "tabs", null);
    __decorate([
        Input('input-accept-types'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "inputAcceptTypes", null);
    __decorate([
        Input('preferred-types'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "preferredTypes", null);
    __decorate([
        Input('system-dialog'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "systemDialog", null);
    __decorate([
        Input('secure-signature'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "secureSignature", null);
    __decorate([
        Input('secure-expire'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "secureExpire", null);
    __decorate([
        Input('value'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "value", null);
    __decorate([
        Input('validators'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], UcWidgetComponent.prototype, "validators", null);
    __decorate([
        Input('cdn-base'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "cdnBase", null);
    __decorate([
        Input('do-not-store'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "doNotStore", null);
    UcWidgetComponent = __decorate([
        Component({
            selector: 'ngx-uploadcare-widget',
            template: '',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], UcWidgetComponent);
    return UcWidgetComponent;
}());
export { UcWidgetComponent };
//# sourceMappingURL=ucWidget.component.js.map
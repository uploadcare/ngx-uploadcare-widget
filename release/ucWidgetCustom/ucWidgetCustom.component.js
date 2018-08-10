var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, VERSION, } from '@angular/core';
import uploadcare from 'uploadcare-widget';
var pkg = require('../../package.json');
var APP_VERSION = JSON.stringify(pkg.version);
uploadcare.start({ integration: "Angular/" + VERSION.full + "; Ngx-Uploadcare-Widget/" + APP_VERSION });
var UcWidgetCustomComponent = /** @class */ (function () {
    function UcWidgetCustomComponent() {
        this.onUploadComplete = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onProgress = new EventEmitter();
        this.publicKey = 'demopublickey';
        this.validators = [];
    }
    UcWidgetCustomComponent.prototype.openDialog = function () {
        var _this = this;
        var config = {
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
            validators: this.validators.filter(function (v) {
                if (typeof v !== 'function') {
                    throw new Error('Only functions allowed in validadators array');
                }
                return v;
            }),
        };
        var dialog = uploadcare.openDialog(this.value, null, config);
        dialog.done(function (selectionPromise) {
            _this.onChange.emit(selectionPromise);
            if (typeof selectionPromise.promise === 'function') {
                selectionPromise.promise()
                    .then(function (groupInfo) {
                    _this.onUploadComplete.emit(groupInfo);
                })
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
            else {
                selectionPromise
                    .then(function (fileInfo) {
                    _this.onUploadComplete.emit(fileInfo);
                })
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
        });
    };
    __decorate([
        Output('on-upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "onUploadComplete", void 0);
    __decorate([
        Output('on-change'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "onChange", void 0);
    __decorate([
        Output('on-progress'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "onProgress", void 0);
    __decorate([
        Input('public-key'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "publicKey", void 0);
    __decorate([
        Input('multiple'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "multiple", void 0);
    __decorate([
        Input('multiple-max'),
        __metadata("design:type", Number)
    ], UcWidgetCustomComponent.prototype, "multipleMax", void 0);
    __decorate([
        Input('multiple-min'),
        __metadata("design:type", Number)
    ], UcWidgetCustomComponent.prototype, "multipleMin", void 0);
    __decorate([
        Input('images-only'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "imagesOnly", void 0);
    __decorate([
        Input('preview-step'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "previewStep", void 0);
    __decorate([
        Input('crop'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "crop", void 0);
    __decorate([
        Input('image-shrink'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "imageShrink", void 0);
    __decorate([
        Input('clearable'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "clearable", void 0);
    __decorate([
        Input('tabs'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "tabs", void 0);
    __decorate([
        Input('input-accept-types'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "inputAcceptTypes", void 0);
    __decorate([
        Input('preferred-types'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "preferredTypes", void 0);
    __decorate([
        Input('system-dialog'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "systemDialog", void 0);
    __decorate([
        Input('secure-signature'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "secureSignature", void 0);
    __decorate([
        Input('secure-expire'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "secureExpire", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "value", void 0);
    __decorate([
        Input('cdn-base'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "cdnBase", void 0);
    __decorate([
        Input('do-not-store'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "doNotStore", void 0);
    __decorate([
        Input('validators'),
        __metadata("design:type", Array)
    ], UcWidgetCustomComponent.prototype, "validators", void 0);
    UcWidgetCustomComponent = __decorate([
        Component({
            selector: 'ngx-uploadcare-widget-custom',
            template: '',
        })
    ], UcWidgetCustomComponent);
    return UcWidgetCustomComponent;
}());
export { UcWidgetCustomComponent };
//# sourceMappingURL=ucWidgetCustom.component.js.map
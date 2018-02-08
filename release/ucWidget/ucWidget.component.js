var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import uploadcare from 'uploadcare-widget';
var UcWidgetComponent = /** @class */ (function () {
    function UcWidgetComponent(element) {
        this.publicKey = 'demopublickey';
        this.value = null;
        this.cdnBase = null;
        this.onUploadComplete = new EventEmitter();
        this.onChange = new EventEmitter();
        this.element = element;
    }
    UcWidgetComponent.prototype.ngAfterViewInit = function () {
        var inputElement = uploadcare.jQuery(this.element.nativeElement).children('input')[0];
        var widget = uploadcare.Widget(inputElement);
        var that = this;
        widget.onUploadComplete(function (fileInfo) {
            that.onUploadComplete.emit(fileInfo);
        });
        widget.onChange(function (promise) {
            that.onChange.emit(promise);
        });
    };
    __decorate([
        Input('public-key'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "publicKey", void 0);
    __decorate([
        Input('multiple'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "multiple", void 0);
    __decorate([
        Input('multiple-max'),
        __metadata("design:type", Number)
    ], UcWidgetComponent.prototype, "multipleMax", void 0);
    __decorate([
        Input('multiple-min'),
        __metadata("design:type", Number)
    ], UcWidgetComponent.prototype, "multipleMin", void 0);
    __decorate([
        Input('images-only'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "imagesOnly", void 0);
    __decorate([
        Input('preview-step'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "previewStep", void 0);
    __decorate([
        Input('crop'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "crop", void 0);
    __decorate([
        Input('image-shrink'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "imageShrink", void 0);
    __decorate([
        Input('clearable'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "clearable", void 0);
    __decorate([
        Input('tabs'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "tabs", void 0);
    __decorate([
        Input('input-accept-types'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "inputAcceptTypes", void 0);
    __decorate([
        Input('preferred-types'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "preferredTypes", void 0);
    __decorate([
        Input('system-dialog'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "systemDialog", void 0);
    __decorate([
        Input('secure-signature'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "secureSignature", void 0);
    __decorate([
        Input('secure-expire'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "secureExpire", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "value", void 0);
    __decorate([
        Input('cdn-base'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "cdnBase", void 0);
    __decorate([
        Input('do-not-store'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "doNotStore", void 0);
    __decorate([
        Output('on-upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onUploadComplete", void 0);
    __decorate([
        Output('on-change'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onChange", void 0);
    UcWidgetComponent = __decorate([
        Component({
            selector: 'ngx-uploadcare-widget',
            template: "<input type=\"hidden\"\n                attr.data-public-key={{publicKey}}\n                [attr.data-multiple]=\"multiple\"\n                [attr.data-multiple-max]=\"multipleMax\"\n                [attr.data-multiple-min]=\"multipleMin\"\n                [attr.data-images-only]=\"imagesOnly\"\n                [attr.data-preview-step]=\"previewStep\"\n                [attr.data-crop]=\"crop\"\n                [attr.data-image-shrink]=\"imageShrink\"\n                [attr.data-clearable]=\"clearable\"\n                [attr.data-tabs]=\"tabs\"\n                [attr.data-input-accept-types]=\"inputAcceptTypes\"\n                [attr.data-preferred-types]=\"preferredTypes\"\n                [attr.data-system-dialog]=\"systemDialog\"\n                [attr.data-secure-signature]=\"secureSignature\"\n                [attr.data-secure-expire]=\"secureExpire\"\n                [attr.data-cdn-base]=\"cdnBase\"\n                [value]=\"value\"\n                [attr.data-do-not-store]=\"doNotStore\"\n              />",
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], UcWidgetComponent);
    return UcWidgetComponent;
}());
export { UcWidgetComponent };
//# sourceMappingURL=ucWidget.component.js.map
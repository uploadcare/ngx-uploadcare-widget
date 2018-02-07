(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/platform-browser"), require("uploadcare-widget"));
	else if(typeof define === 'function' && define.amd)
		define("ngx-uploadcare-widget", ["@angular/core", "@angular/platform-browser", "uploadcare-widget"], factory);
	else if(typeof exports === 'object')
		exports["ngx-uploadcare-widget"] = factory(require("@angular/core"), require("@angular/platform-browser"), require("uploadcare-widget"));
	else
		root["ngx-uploadcare-widget"] = factory(root["@angular/core"], root["@angular/platform-browser"], root["uploadcare-widget"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__, __WEBPACK_EXTERNAL_MODULE_uploadcare_widget__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidget__ = __webpack_require__("./src/ucWidget/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget__["b"]; });



/***/ }),

/***/ "./src/ucWidget/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidget_component__ = __webpack_require__("./src/ucWidget/ucWidget.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ucWidget_module__ = __webpack_require__("./src/ucWidget/ucWidget.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ucWidget_module__["a"]; });




/***/ }),

/***/ "./src/ucWidget/ucWidget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__ = __webpack_require__("uploadcare-widget");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UcWidgetComponent = /** @class */ (function () {
    function UcWidgetComponent(element) {
        this.publicKey = 'demopublickey';
        this.fileId = null;
        this.cdnBase = null;
        this.onUploadComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = element;
    }
    UcWidgetComponent.prototype.ngAfterViewInit = function () {
        var inputElement = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.jQuery(this.element.nativeElement).children('input')[0];
        var widget = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.Widget(inputElement);
        var that = this;
        widget.onUploadComplete(function (fileInfo) {
            that.onUploadComplete.emit(fileInfo);
        });
        widget.onChange(function (promise) {
            that.onChange.emit(promise);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('public-key'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "publicKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-max'),
        __metadata("design:type", Number)
    ], UcWidgetComponent.prototype, "multipleMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-min'),
        __metadata("design:type", Number)
    ], UcWidgetComponent.prototype, "multipleMin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('images-only'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "imagesOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preview-step'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "previewStep", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('crop'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "crop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('image-shrink'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "imageShrink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clearable'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "clearable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabs'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('input-accept-types'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "inputAcceptTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preferred-types'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "preferredTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('system-dialog'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "systemDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-signature'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "secureSignature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-expire'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "secureExpire", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('file-id'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "fileId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cdn-base'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "cdnBase", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('do-not-store'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "doNotStore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onUploadComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-change'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onChange", void 0);
    UcWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-uploadcare-widget',
            template: "<input type=\"hidden\"\n                attr.data-public-key={{publicKey}}\n                [attr.data-multiple]=\"multiple\"\n                [attr.data-multiple-max]=\"multipleMax\"\n                [attr.data-multiple-min]=\"multipleMin\"\n                [attr.data-images-only]=\"imagesOnly\"\n                [attr.data-preview-step]=\"previewStep\"\n                [attr.data-crop]=\"crop\"\n                [attr.data-image-shrink]=\"imageShrink\"\n                [attr.data-clearable]=\"clearable\"\n                [attr.data-tabs]=\"tabs\"\n                [attr.data-input-accept-types]=\"inputAcceptTypes\"\n                [attr.data-preferred-types]=\"preferredTypes\"\n                [attr.data-system-dialog]=\"systemDialog\"\n                [attr.data-secure-signature]=\"secureSignature\"\n                [attr.data-secure-expire]=\"secureExpire\"\n                [attr.data-cdn-base]=\"cdnBase\"\n                [value]=\"fileId\"\n                [attr.data-do-not-store]=\"doNotStore\"\n              />",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], UcWidgetComponent);
    return UcWidgetComponent;
}());



/***/ }),

/***/ "./src/ucWidget/ucWidget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("@angular/platform-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__ = __webpack_require__("./src/ucWidget/ucWidget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UcWidgetModule = /** @class */ (function () {
    function UcWidgetModule() {
    }
    UcWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__["a" /* UcWidgetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], UcWidgetModule);
    return UcWidgetModule;
}());



/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;

/***/ }),

/***/ "uploadcare-widget":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_uploadcare_widget__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map
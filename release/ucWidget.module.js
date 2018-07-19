var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { UcWidgetComponent } from './ucWidget/ucWidget.component';
import { UcWidgetCustomComponent } from './ucWidgetCustom/ucWidgetCustom.component';
import { CommonModule } from '@angular/common';
var UcWidgetModule = /** @class */ (function () {
    function UcWidgetModule() {
    }
    UcWidgetModule_1 = UcWidgetModule;
    UcWidgetModule.forRoot = function () {
        return {
            ngModule: UcWidgetModule_1,
            providers: []
        };
    };
    UcWidgetModule = UcWidgetModule_1 = __decorate([
        NgModule({
            declarations: [
                UcWidgetComponent,
                UcWidgetCustomComponent
            ],
            imports: [
                CommonModule,
            ],
            exports: [
                UcWidgetComponent,
                UcWidgetCustomComponent,
            ],
        })
    ], UcWidgetModule);
    return UcWidgetModule;
    var UcWidgetModule_1;
}());
export { UcWidgetModule };
//# sourceMappingURL=ucWidget.module.js.map
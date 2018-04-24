import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UcWidgetComponent } from './ucWidget.component';
import { UcWidgetDefaultModule } from '../ucWidgetDefault/ucWidgetDefault.module';
import { UcWidgetCustomModule } from '../ucWidgetCustom/ucWidgetCustom.module';

@NgModule({
  declarations: [
    UcWidgetComponent
  ],
  imports: [
    BrowserModule,
    UcWidgetDefaultModule,
    UcWidgetCustomModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [UcWidgetComponent],
})
export class UcWidgetModule { }

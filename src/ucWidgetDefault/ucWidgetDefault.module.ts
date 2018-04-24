import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UcWidgetDefaultComponent } from './ucWidgetDefault.component';

@NgModule({
  declarations: [
    UcWidgetDefaultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [UcWidgetDefaultComponent],
})
export class UcWidgetDefaultModule { }

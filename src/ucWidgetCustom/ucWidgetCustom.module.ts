import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UcWidgetCustomComponent } from './ucWidgetCustom.component';

@NgModule({
  declarations: [
    UcWidgetCustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [UcWidgetCustomComponent],
})
export class UcWidgetCustomModule { }

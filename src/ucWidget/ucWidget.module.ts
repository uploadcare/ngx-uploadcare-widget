import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UcWidgetComponent } from './ucWidget.component';
import { UcWidgetCustomComponent } from '../ucWidgetCustom/ucWidgetCustom.component';
import { UcWidgetCustomModule } from '../ucWidgetCustom/ucWidgetCustom.module';

@NgModule({
  declarations: [
    UcWidgetComponent
  ],
  imports: [
    BrowserModule,
    UcWidgetCustomModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    UcWidgetComponent,
    UcWidgetCustomComponent,
  ],
})
export class UcWidgetModule { }

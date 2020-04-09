import { NgModule } from '@angular/core';

import { UcWidgetComponent } from './ucWidget.component';
import { UcWidgetCustomComponent } from '../ucWidgetCustom/ucWidgetCustom.component';

@NgModule({
  declarations: [
    UcWidgetCustomComponent,
    UcWidgetComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [],
  exports: [
    UcWidgetCustomComponent,
    UcWidgetComponent
  ],
})
export class UcWidgetModule { }

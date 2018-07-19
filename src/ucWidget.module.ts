import { NgModule, ModuleWithProviders } from '@angular/core';
import { UcWidgetComponent } from './ucWidget/ucWidget.component';
import { UcWidgetCustomComponent } from './ucWidgetCustom/ucWidgetCustom.component';
import { CommonModule } from '@angular/common';

@NgModule({
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
export class UcWidgetModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UcWidgetModule,
      providers: []
    };
  }
}

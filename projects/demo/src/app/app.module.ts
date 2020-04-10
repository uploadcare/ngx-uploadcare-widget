import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { UcWidgetModule } from '../../../ngx-uploadcare-widget/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrettyJsonModule,
    UcWidgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

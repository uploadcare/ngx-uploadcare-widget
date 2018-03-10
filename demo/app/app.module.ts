import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { UcWidgetComponent } from '../../src/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UcWidgetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrettyJsonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

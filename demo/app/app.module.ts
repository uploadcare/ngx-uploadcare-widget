import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

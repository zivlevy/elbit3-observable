import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { ArrayComponent } from './array/array.component';
import { TimersComponent } from './timers/timers.component';
import { InputComponent } from './input/input.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ArrayComponent,
    TimersComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

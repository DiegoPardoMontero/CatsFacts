import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsInfoComponent } from './cats-info/cats-info.component';
import { DevInfoComponent } from './dev-info/dev-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsInfoComponent,
    DevInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

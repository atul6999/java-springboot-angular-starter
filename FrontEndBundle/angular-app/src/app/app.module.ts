import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeBundleComponent } from './home-bundle/home-bundle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBundleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

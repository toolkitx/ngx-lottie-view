import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxLottieViewModule } from 'ngx-lottie-view';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLottieViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

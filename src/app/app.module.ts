import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [NgApexchartsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

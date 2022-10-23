import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StaffModule } from './staff/staff.module';
import {BannerModule} from "./banner/banner.module";
import {TblBannerModule} from "./tbl-banner/tbl-banner.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaffModule,
    BannerModule,
    HttpClientModule,
    TblBannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

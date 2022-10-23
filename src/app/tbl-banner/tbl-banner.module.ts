import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TblbannerComponent } from './index-tblbanner/tblbanner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TblbannerComponent
  ],
  exports: [
    TblbannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TblBannerModule { }

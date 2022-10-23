import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBannerComponent } from './create-banner/create-banner.component';
import { IndexBannerComponent } from './index-banner/index-banner.component';
import { EditBannerComponent } from './edit-banner/edit-banner.component';
import {StaffRoutingModule} from "../staff/staff-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateBannerComponent,
    IndexBannerComponent,
    EditBannerComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BannerModule { }

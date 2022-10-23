import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {IndexBannerComponent} from "../banner/index-banner/index-banner.component";
import {CreateBannerComponent} from "../banner/create-banner/create-banner.component";
import {EditBannerComponent} from "../banner/edit-banner/edit-banner.component";
import {TblbannerComponent} from "../tbl-banner/index-tblbanner/tblbanner.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'staff-create', component: CreateComponent },
  { path: 'edit-staff/:staffId/edit', component: EditComponent },
  { path: 'banner', component: IndexBannerComponent },
  { path: 'banner-create', component: CreateBannerComponent },
  { path: 'edit-banner/:bannerId/edit', component: EditBannerComponent },
  { path: 'slide-show', component: TblbannerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StaffRoutingModule { }

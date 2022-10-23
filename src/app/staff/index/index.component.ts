import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { CompanyStaff } from '../companyStaff';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  staffs: CompanyStaff[] = [];
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public staffService: StaffService, private route: ActivatedRoute, private router: Router) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.staffService.getAll().subscribe((data: CompanyStaff[])=>{
      this.staffs = data;
      console.log(this.staffs);
    })

    this.form = new FormGroup({
      searchQuery: new FormControl('', [Validators.required])
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.staffService.delete(id).subscribe(res => {
         this.staffs = this.staffs.filter(item => item.id !== id);
         console.log('CompanyStaff deleted successfully!');
    })
  }

  search(){
    this.staffService.searchByName(this.form.value.searchQuery).subscribe((data: CompanyStaff[])=>{
      this.staffs = data;
      console.log(this.staffs);
    })
  }

}

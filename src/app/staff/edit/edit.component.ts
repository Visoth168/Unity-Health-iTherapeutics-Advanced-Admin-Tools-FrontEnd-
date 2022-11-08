import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyStaff } from '../companyStaff';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { age } from '../age';
import { access } from '../access';
import { title } from '../title';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  age: age[] = [];
  access: access[] = [];
  title: title[]=[];
  id!: number;
  staff!: CompanyStaff;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void { this.staffService.getAllAge().subscribe((data: age[])=>{
    this.age = data;
    console.log(this.age);
  })
  this.staffService.getAllTitle().subscribe((data: title[])=>{
    this.title = data;
    console.log(this.title);
  })
  this.staffService.getAllAccess().subscribe((data: access[])=>{
    this.access = data;
    console.log(this.access);
  })

  this.id = this.route.snapshot.params['staffId'];
  this.staffService.find(this.id).subscribe((data: CompanyStaff)=>{
    this.staff = data;
    console.log(this.staff);
  });
    this.form = new FormGroup({
      company: new FormControl('', [Validators.required]),
      acl: new FormControl('', Validators.required),
      accountType: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      position: new FormControl('', [Validators.required]),
     country: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required]),
      supplier: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    if(confirm('Are you sure you want to update this user?')){
    console.log(this.form.value);
    this.staffService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('CompanyStaff updated successfully!');
         this.router.navigateByUrl('/');
     
    })
    alert('User updated successfully!')
  }
  }
}

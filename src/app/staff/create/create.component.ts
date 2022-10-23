import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public staffService: StaffService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
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
      suppliers: new FormControl('', Validators.required)
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
    console.log(this.form.value);
    this.staffService.create(this.form.value).subscribe((res:any) => {
         console.log('CompanyStaff created successfully!');
         this.router.navigateByUrl('/');
    })
  }

}

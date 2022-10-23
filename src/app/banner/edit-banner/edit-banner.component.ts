import { Component, OnInit } from '@angular/core';
import {Tblslideshow} from "../tblslideshow";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BannerService} from "../banner.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  id!: number;
  banner!: Tblslideshow;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['bannerId'];
    this.bannerService.findBanner(this.id).subscribe((data: Tblslideshow)=>{
      this.banner = data;
      console.log(this.banner);
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      active: new FormControl('', Validators.required),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', Validators.required)
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
    this.bannerService.updateBanner(this.id, this.form.value).subscribe((res:any) => {
      console.log('Tblslideshow updated successfully!');
      this.router.navigateByUrl('/banner');
    })
  }

}

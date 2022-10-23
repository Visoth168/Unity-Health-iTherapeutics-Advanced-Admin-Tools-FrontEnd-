import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Tblslideshow} from "../tblslideshow";
import {BannerService} from "../banner.service";

@Component({
  selector: 'app-index-banner',
  templateUrl: './index-banner.component.html',
  styleUrls: ['./index-banner.component.css']
})
export class IndexBannerComponent implements OnInit {

  banners: Tblslideshow[] = [];
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public bannerService: BannerService, private route: ActivatedRoute, private router: Router) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.bannerService.getAllSlideShows().subscribe((data: Tblslideshow[])=>{
      this.banners = data;
      console.log(this.banners);
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
  deleteBanner(id:number){
    this.bannerService.deleteBanner(id).subscribe(res => {
      this.banners = this.banners.filter(item => item.id !== id);
      console.log('Tblslideshow deleted successfully!');
    })
  }

  search(){
    this.bannerService.searchBannerByName(this.form.value.searchQuery).subscribe((data: Tblslideshow[])=>{
      this.banners = data;
      console.log(this.banners);
    })
  }

}

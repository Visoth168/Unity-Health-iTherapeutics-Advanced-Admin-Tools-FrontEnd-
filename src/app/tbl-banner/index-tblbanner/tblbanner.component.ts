import { Component, OnInit } from '@angular/core';
import {Tblslideshow} from "../../banner/tblslideshow";
import {BannerService} from "../../banner/banner.service";
import {TblBanner} from "../tblbanner";
import {TblSlideshowBanner} from "../tblslideshowbanner";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tblbanner',
  templateUrl: './tblbanner.component.html',
  styleUrls: ['./tblbanner.component.css']
})
export class TblbannerComponent implements OnInit {

  slide: Tblslideshow= new Tblslideshow(0,"","","","")
  banners: TblBanner[] = [];
  tblSlideshowBanners: TblBanner[] = [];
  form!: FormGroup;



  constructor(public bannerService: BannerService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.bannerService.getAllBanners().subscribe((tblBanners: TblBanner[]) => {
      this.banners = tblBanners;
    });
    // this.bannerService.getAllSlideShowBanners().subscribe((tblSlideShowBanners: TblSlideshowBanner[]) => {
    //   this.tblSlideshowBanners = tblSlideShowBanners;
    // });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      active: new FormControl('', Validators.required),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', Validators.required)
    });
  }

  addToTblSlideShowBanner(){
    console.log(this.banners);
    if(this.banners.length>0){
      var selectedBanners: TblBanner[] = this.banners.filter(b=>b.isSelected);
      for (const banner of selectedBanners) {
          if(!banner.isSelected) return;
          console.log("selected", banner.id)
          var slideShowBanner = new TblBanner(banner.id,banner.name,banner.startDate,banner.endDate,false);
          this.tblSlideshowBanners.push(slideShowBanner);
          this.deleteFromTblSlideShow(banner);
      }

    }
  }

  removeFromTblSlideShowBanner(){
    if(this.tblSlideshowBanners.length>0){
      let selectedIndexTblSlideShowBanner = this.tblSlideshowBanners.length-1;
      let tblSlideShowBanner = this.tblSlideshowBanners[selectedIndexTblSlideShowBanner];
      var slideShow = new TblBanner(tblSlideShowBanner.id,tblSlideShowBanner.name,tblSlideShowBanner.startDate,tblSlideShowBanner.endDate);
      this.banners.push(slideShow);
      this.deleteFromTblSlideShowBanner(tblSlideShowBanner);
    }
  }

  deleteFromTblSlideShow(slideShow:TblBanner) {
    const index: number = this.banners.indexOf(slideShow);
    if (index !== -1) {
      this.banners.splice(index, 1);
    }
  }

  deleteFromTblSlideShowBanner(tbSlideShowBannr:TblBanner) {
    const index: number = this.tblSlideshowBanners.indexOf(tbSlideShowBannr);
    if (index !== -1) {
      this.tblSlideshowBanners.splice(index, 1);
    }
  }

  saveTblSlideShowChanges(){
    var x;
    const date=new Date();
    const dt= new Date(this.slide.startDate);
    const dt1= new Date(this.slide.endDate);
    x=this.slide.name
    if (x == "") {
        alert("Enter a Valid Name");
        }else if (this.slide.startDate == ""||dt < date) {
            alert("Choose a valid starting Date");
            
        }else if (this.slide.endDate == ""||dt1 < dt) {
            alert("Choose a valid ending Date");
        }else {
    this.bannerService.saveSlideShowBanner(this.slide, this.tblSlideshowBanners).subscribe((data: TblSlideshowBanner) => {
      console.log(data)
      this.router.navigateByUrl('/banner');
      
    });alert("New Banner Rotator Created Successfully!!!")}
    // this.router.navigateByUrl('/slide-show');
  }

  bannerselection(banner: TblBanner){
    banner.isSelected=!banner.isSelected;
    var n = this.slide
     console.log("SELLLEEECCCTEEED ^^",{n})
  }

  addNewBanner(){
    if (this.form.value.active==true){
      this.form.value.active="Yes";
    }else {this.form.value.active="No"}
    console.log(this.form.value);
    this.bannerService.createBanner(this.form.value).subscribe((res:any) => {
      console.log('Data submitted successfully!');
      // this.router.navigateByUrl('/slide-show');
      window.location.href = "/slide-show";

    })
  }

}

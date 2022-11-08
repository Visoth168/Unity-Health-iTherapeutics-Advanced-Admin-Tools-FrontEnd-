import { Component, OnInit } from '@angular/core';
import {Tblslideshow} from "../tblslideshow";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BannerService} from "../banner.service";
import {ActivatedRoute, Router} from "@angular/router";
import { TblBanner } from 'src/app/tbl-banner/tblbanner';
import { TblSlideshowBanner } from 'src/app/tbl-banner/tblslideshowbanner';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  id!: number;
  banner!: Tblslideshow;
  form!: FormGroup;
  slide: Tblslideshow= new Tblslideshow(0,"","","","")
  banners: TblBanner[] = [];
  tblSlideshowBanners: TblBanner[] = [];
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
      this.slide=data;
      console.log(this.banner);
    });
    this.bannerService.getAllBanners().subscribe((tblBanners: TblBanner[]) => {
      this.banners = tblBanners;
      this.bannerService.getAllBannersBySlide(this.id).subscribe((slidebanners: any[]) => {
        console.log("BANNNZZERSJKlk",slidebanners)
        const selectedBanners = this.banners.filter(b=>slidebanners.some(s=>s.banner_id===b.id))
        for (const banner of selectedBanners) {
          console.log("selected", banner.id)
          var slideShowBanner = new TblBanner(banner.id,banner.name,banner.startDate,banner.endDate,false);
          this.tblSlideshowBanners.push(slideShowBanner);
          this.deleteFromTblSlideShow(banner);
        }
      });
    });




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

  updateTblSlideShowChanges(){
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
        // console.log(this.form.value);
    let res: any[] = []
    for (let obj of this.tblSlideshowBanners) {
      res = [...res, {id:obj.id}]
    }
    var slideShowBoxes = {...this.banner, "banners": [...res]}
    this.bannerService.updateBanner(this.id, slideShowBoxes).subscribe((res:any) => {
      console.log('Tblslideshow updated successfully!');
      this.router.navigateByUrl('/banner');
      alert('Banner Rotator Updated Successfully')
    });}
    // this.bannerService.saveSlideShowBanner(this.slide, this.tblSlideshowBanners).subscribe((data: TblSlideshowBanner) => {
    //   console.log(data)
    // });
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

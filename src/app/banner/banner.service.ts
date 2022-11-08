import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Tblslideshow} from "./tblslideshow";
import {TblSlideshowBanner} from "../tbl-banner/tblslideshowbanner";
import { TblBanner } from '../tbl-banner/tblbanner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private apiURL = "http://localhost:8080";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAllSlideShows(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-slideshows')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAllBanners(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-banners')

      .pipe(
        catchError(this.errorHandler)
      )
  }

    getAllBannersBySlide(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-slideshow-banners/'+id)

      .pipe(
        catchError(this.errorHandler)
      )
  }


  getAllSlideShowBanners(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-slideshow-banners')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  saveSlideShowBanner(tblSlideShow:Tblslideshow, tblSlideShowBanners:TblBanner[]): Observable<any> {
   let res: any[] = []

    for (let obj of tblSlideShowBanners) {
      res = [...res, {id:obj.id}]
    }
    var slideShowBoxes = {...tblSlideShow, "banners": [...res]}
    console.log(slideShowBoxes)
    return this.httpClient.post(this.apiURL + '/add-new-slide', JSON.stringify(slideShowBoxes),this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  createBanner(banner:Tblslideshow): Observable<any> {

    return this.httpClient.post(this.apiURL + '/add-new-banner', JSON.stringify(banner), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  findBanner(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/get-banner/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  updateBanner(id:number, banner:any): Observable<any> {

    return this.httpClient.put(this.apiURL + '/edit-slide/' + id, JSON.stringify(banner), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteBanner(id:number){
    return this.httpClient.delete(this.apiURL + '/delete-banner/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  searchBannerByName(searchQuery:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/search-banner/' + searchQuery)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  activateAndDeactivateBanner(bannerId:number, status:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/activate-deactivate-banner/'+bannerId+'/'+status)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CompanyStaff } from './companyStaff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

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
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-staff')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(post:CompanyStaff): Observable<any> {

    return this.httpClient.post(this.apiURL + '/add-new-staff', JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/get-staff/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, staff:CompanyStaff): Observable<any> {

    return this.httpClient.put(this.apiURL + '/edit-staff/' + id, JSON.stringify(staff), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/delete-staff/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  searchByName(searchQuery:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/search-staff/' + searchQuery)

      .pipe(
        catchError(this.errorHandler)
      )
  }
  getAllAge(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-age')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllAccess(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-access')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllTitle(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/all-title')

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

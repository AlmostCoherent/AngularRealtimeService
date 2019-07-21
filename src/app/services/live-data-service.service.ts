import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ApiResult } from '../models/apiResult';

@Injectable({
  providedIn: 'root'
})
export class LiveDataServiceService {

  restUrl: string = "https://rest.coinapi.io/v1/exchangerate/BTC?apikey=DB6BADA9-3F77-4465-A82E-B07300257A55";
  apiObservable: Observable<any>;

  constructor(
    private httpClient: HttpClient
  ) { 
      this.apiObservable = this.getApiHttpResult();

  }

  // getApiResult() {
  //   const apiObservable = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(this.makeHttpRequest)
  //     }, 1000)  

  //   });

  //   return apiObservable;
  //   const studentsObservable = new Observable(observer => {
  //     setTimeout(() => {
  //         observer.next(this.students);
  //     }, 1000);
  //   });

  //   return studentsObservable;
  // }

  getApiHttpResult() {
    return this.httpClient.get(this.restUrl);
  }
}

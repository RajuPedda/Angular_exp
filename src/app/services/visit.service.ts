import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { appApiResources } from '../core/app.constants';
import { LoginResponse } from '../models/Ilogin-response';
import { HelperService } from './core/helper.service';
import { BaseService } from './core/base.service';
import { VisitsResponse } from '../models/IVisit-response';
import { Observable } from 'rxjs/observable';
import { BarMenu } from '../models/BarMenu';
import { ISample } from '../models/sample';


@Injectable()
export class VisitsService {

  constructor(private http: HttpClient) {
  }

  getVisitSummery(): Observable<VisitsResponse[]> {

    // "appApiResources.visits_mock" is the constant string containing visits mocks api url return
   return  this.http.get<VisitsResponse[]>(appApiResources.visits_mock)

  }

 /*  getVisitSummery(): Observable<ISample> {
   return  this.http.get<ISample>("http://192.168.9.119:8080/fcsky/rest/intelligence/dashboards")
  } */

  testService(): Observable<BarMenu[]> {
let value: any;

  value =   this.http.get<BarMenu[]>('/assets/mock-data/barMenu.json')

  return value;

  }

  sendVisitsDataToServer(postBody: any): Observable<VisitsResponse> {
    // "appApiResources.visits" is the constant string containing visits api url return
   return  this.http.post(appApiResources.visits, postBody)
      .map((res: VisitsResponse) => {
       return res;
    })
      .catch((error: Response) => Observable.throw(error))
      .finally(() => {
        return Observable.throw('')
      });

  }

}

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { appApiResources } from '../core/app.constants';
import { LoginResponse } from '../models/Ilogin-response';
import { HelperService } from './core/helper.service';
import { BaseService } from './core/base.service';
import { TasksResponse } from '../models/ITask-response';
import { Observable } from 'rxjs/observable';


@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {
  }
  getTasksSummery(): Observable<TasksResponse[]> {

    // "appApiResources.visits_mock" is the constant string containing visits mocks api url return
   return  this.http.get<TasksResponse[]>(appApiResources.tasks_mock);

  }

  getTask(id: string): Observable<TasksResponse> {
    const httpParams: HttpHeaders = new HttpHeaders();
    httpParams.set('id', id);
    return  this.http.get<TasksResponse>(appApiResources.tasks_mock, {headers: httpParams});
  }

  sendVisitsDataToServer(postBody: any): Observable<TasksResponse> {
    // "appApiResources.visits" is the constant string containing visits api url return
   return  this.http.post(appApiResources.tasks_mock, postBody)
      .map((res: TasksResponse) => {
       return res;
    })


  }

}

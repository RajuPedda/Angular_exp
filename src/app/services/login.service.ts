import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { appApiResources } from '../core/app.constants';
import { LoginResponse } from '../models/Ilogin-response';
import { HelperService } from './core/helper.service';
import { BaseService } from './core/base.service';
@Injectable()
export class LoginService {
  constructor(public http: BaseService, public helperService: HelperService) {
  }
  login(postBody: any): Observable<LoginResponse> {
    // "appApiResources.login" is the constant string containing login api urlreturn
    return this.http.post(appApiResources.login, postBody)
      .map((res: LoginResponse) => {
      this.processLoginResponse(res);
      return res;
    })
      .catch((error: Response) => Observable.throw(error))
      .finally(() => {
      });
  }

  processLoginResponse(res) {

  }
}

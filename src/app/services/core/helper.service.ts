import { LoginResponse } from '../../models/Ilogin-response';
import { Observable } from 'rxjs/Observable';
import { decode } from 'punycode';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

// import { environment } from '../../../environments';


function getWindow(): any {
  return window;
}

@Injectable()
export class HelperService {
 env: string;
  menuAccesses: string;
  addContentTypeHeader: Boolean;

  constructor(public slimLoadingBarService: SlimLoadingBarService) {
    this.env = '' // environment.env;
  }

  // return the global window object
  get nativeWindow(): any {
    return getWindow();
  }


  isProdEnv(): boolean {
    return (this.env.toLocaleLowerCase() === 'prod' ||
      this.env.toLocaleLowerCase() === 'production') ? true : false;
  }
  isStageEnv(): boolean {
    return (this.env.toLocaleLowerCase() === 'prod' ||
      this.env.toLocaleLowerCase() === 'production') ? true : false;
  }
  isDevEnv(): boolean {
    return (this.env.toLocaleLowerCase() === 'dev' ||
      this.env.toLocaleLowerCase() === 'development') ? true : false;
  }

  startLoader() {

  }

  stopLoader() {

  }

  /**
   * Use this method to create logs to the server
   * Pass info like error stack (if error), user info, user brower and other details
   */
  serverLogger(log: any) {
    // tslint:disable-next-line:no-console

  }

}

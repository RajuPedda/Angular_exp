// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Observable } from 'rxjs/Observable';

// app
import { Config, EnvConfig } from '../../index';

// module
import { NameList } from '../actions/index';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NameListService {

  constructor(
    private http: HttpClient
  ) {
   // this.category = NameList.CATEGORY;
  }

  getNames(): Observable<Array<any>> {
     return this.http.get<any[]> (`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)

   /*  return this.http.get('https://my-json-server.typicode.com/RajuPedda/sampleJsonRepo/posts')
      .map(res => res); */
  }


  getFormsFromServer(): Observable<Array<any>> {
    return this.http.get<any[]>('https://my-json-server.typicode.com/RajuPedda/sampleJsonRepo/formData')

  }
}

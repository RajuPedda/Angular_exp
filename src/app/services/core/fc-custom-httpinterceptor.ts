// @author : RajuPedda .M
import {Injectable } from '@angular/core';
import {HttpInterceptor, HttpClient, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


export class FcCustomHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('proccessing the request');

        // custom headers
        const customReq = req.clone({
            headers: req.headers.set('customheader', 'done')
        })


        return next.handle(customReq)
        .do((evt: HttpEvent<any>) => {
            if ( evt instanceof HttpResponse) {
                console.log('custom response');
            }
            return evt;
        })
       .catch( response => {
                if (response instanceof HttpErrorResponse) {
                    console.log('custom Error Response')
                }
                return Observable.throw(response);
       })
    }
}

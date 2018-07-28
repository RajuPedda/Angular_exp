import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';

import * as _ from 'lodash';
/* import * as SourcemappedStacktrace from 'sourcemapped-stacktrace';
import * as StackTrace from 'stacktrace-js';
import * as ErrorStackParser from 'error-stack-parser';
import * as StackTraceGPS from 'stacktrace-gps'; */


import { HelperService } from './helper.service';

/**
 * Global Error Handling
 * More Info: https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
 */
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(public injector: Injector) { }
    handleError(error: any) {
        const helperService = this.injector.get(HelperService);
        const location = this.injector.get(LocationStrategy);

        // Get the current app location url
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        /* if (helperService.isDevEnv()) {
            this.gracefulErrorLog(error, helperService, url, message);
        } */

        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;

    }


}

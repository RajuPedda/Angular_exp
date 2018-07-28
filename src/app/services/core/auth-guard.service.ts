// lib
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

// app
/* import * as AuthActions from '../actions/auth';
import * as fromAuth from '../reducers'; */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: any) {} // Store<fromAuth.State>

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select( ( ): any => {}/* fromAuth.getLoggedIn */ ) ,
      map(authed => {
        if (!authed) {
          this.store.dispatch(/* new AuthActions.LoginRedirect() */);
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}

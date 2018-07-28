/* @author : RajuPedda */
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';
import { MaterialLibModule } from './shared/material-lib.module';
// import /* { CreateVisitDialogComponent */ } from './_visits/components/visit-summery/visits.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { BaseService } from './services/core/base.service';
import { HttpService } from './services/core/http.service';
import { HelperService } from './services/core/helper.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { CustomErrorHandlerService } from './services/core/custom-error-handler.service';
import { ToastNotificationService } from './services/core/toast-notification.service';
import { FcCustomHttpInterceptor } from './services/core/fc-custom-httpinterceptor';
import { CustomDashboardDialogComponent } from './home/components/home/custom-dashboard/custom-dashboard.component';
import { MultilingualModule, translateLoaderFactory } from './core/i18n';

//import {AppReducer} from './core/ngrx/index'



Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(<any>http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [ AppComponent, CustomDashboardDialogComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialLibModule,
        FlexLayoutModule,
        SelectButtonModule,
        HttpClientModule,
        ReactiveFormsModule,
       /*  StoreModule.provideStore(AppReducer),
        EffectsModule.run(MultilingualEffects), */

        MultilingualModule.forRoot([{
            provide: TranslateLoader,
            deps: [HttpClient],
            useFactory: (translateLoaderFactory)
          }]),

       /*  TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }), */
        ...SHARED_MODULES,
       /*  StoreDevtoolsModule.instrument({
            maxAge: 15
          }) */
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: FcCustomHttpInterceptor, multi: true},
                    HelperService, SlimLoadingBarService,
                    CustomErrorHandlerService, ToastNotificationService],
    bootstrap: [ AppComponent/* , CreateVisitDialogComponent */ ],
    exports: [ MaterialLibModule],
    entryComponents: [CustomDashboardDialogComponent]
})
export class AppModule {
    static injector: Injector

    constructor (private injector: Injector) {
        AppModule.injector  = injector;
    }

}

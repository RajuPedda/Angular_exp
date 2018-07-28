import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { HomeComponent } from './components/home/home.component';
import { SHARED_MODULES } from './home.common';
import { MaterialLibModule } from '../shared/material-lib.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        ...SHARED_MODULES,
        MaterialLibModule,
        FlexLayoutModule
    ],
    declarations: [HomeComponent],
    exports: [MaterialLibModule]
})
export class HomeModule {

    constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) {
            throw new Error('HomeModule already loaded; Import in root module only.');
        }
    }
}

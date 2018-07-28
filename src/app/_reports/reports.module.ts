import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { MaterialLibModule } from '../shared/material-lib.module';
import { ReportsComponent } from './components/reports.component';
import { SHARED_MODULES } from './reports.common';

@NgModule({
    imports: [
        ...SHARED_MODULES,
        MaterialLibModule
    ],
    declarations: [ReportsComponent],
    exports: [MaterialLibModule]
})
export class ReportsModule {

    constructor( @Optional() @SkipSelf() parentModule: ReportsModule) {
        if (parentModule) {
            throw new Error('ReportsModule already loaded; Import in root module only.');
        }
    }
}

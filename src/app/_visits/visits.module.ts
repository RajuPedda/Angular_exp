import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './visits.common';
import { MaterialLibModule } from '../shared/material-lib.module';
import { VisitsService } from '../services/visit.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
        ...SHARED_MODULES,
        MaterialLibModule,
        FlexLayoutModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    exports: [MaterialLibModule],
    providers: [VisitsService]
})
export class VisitsModule { }

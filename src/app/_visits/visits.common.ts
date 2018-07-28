// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { VisitsRoutes } from './visits.routes';
import { VisitsComponent } from './components/visit-summery/visits.component';
import { BaseSummeryHeaderComponent } from '../core/components/base-summery-header/base-summery-header.component';


export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>VisitsRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    VisitsComponent,
    BaseSummeryHeaderComponent
];

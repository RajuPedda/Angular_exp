import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared';
import {RouterModule } from '../common';

import { ReportsComponent } from './components/reports.component';
import { ReportsRoutes } from './reports.routes';


export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>ReportsRoutes),
    TranslateModule.forChild()
];

export const COMPONENTS_DECLARATIONS: any[] = [
    ReportsComponent
]

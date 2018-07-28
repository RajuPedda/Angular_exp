// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { TasksRoutes } from './tasks.routes';
import { TasksComponent } from './components/task-summery/tasks.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>TasksRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    TasksComponent
];

import { NgModule } from '@angular/core';
import { MaterialLibModule } from '../shared/material-lib.module';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './tasks.common';
import { TasksService } from '../services/task.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MaterialLibModule,
        ...SHARED_MODULES,
        FlexLayoutModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    exports: [],
    providers: [TasksService]
})
export class TasksModule { }

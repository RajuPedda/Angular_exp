import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { BaseSummeryComponent } from '../../../core/components/base-summery.component';
import { TasksService } from '../../../services/task.service';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog,  MAT_DIALOG_DATA} from '@angular/material';
import { TasksResponse } from '../../../models/ITask-response';

@Component({
    moduleId: module.id,
    selector: 'fc-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent extends BaseSummeryComponent implements OnInit {

    constructor(private tasksService: TasksService, dialog: MatDialog) {
        super(dialog)
    }

    ngOnInit() {

        this.tasksService.getTasksSummery().subscribe((data: TasksResponse[]) =>  {
            this.summeryData = data
        },
        (error: HttpErrorResponse) => {
            if (error instanceof Error) {
                // client side error message
                this.message = `this is the error ${error.error.message}`
            } else {
                // backend server error message
                this.message = `this is server error ${error.status} and body ${error.message}`
            }
        }
    );
    }

}




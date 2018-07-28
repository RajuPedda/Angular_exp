import { BaseSummeryComponent } from '../../../core/components/base-summery.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { CreateVisitDialogComponent } from '../creat-visit/create-visit.component';
import { VisitsService } from '../../../services/visit.service';

import {MatPaginator, MatTableDataSource, MatSort, MatDialog,  MAT_DIALOG_DATA} from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { VisitsResponse } from '../../../models/IVisit-response';
import { BarMenu } from '../../../models/BarMenu';
import { BaseSummeryHeaderComponent } from '../../../core/components/base-summery-header/base-summery-header.component';



@Component({
    moduleId: module.id,
    selector: 'fc-visits',
    templateUrl: './visits.component.html',
    styleUrls: ['./visits.component.scss']
})

export class VisitsComponent extends BaseSummeryComponent implements OnInit {

    filtersFormList = ['Cafe Self-Assessment 2016', 'Cafe Visit - Top 10', 'CSQM - 2016', 'Warehouse Inspection Audit',
    'Crest Foods Inc. Assessment-Rev', 'Critical Infraction Letter'];

    users;

    constructor(private visitsSer: VisitsService, dialog: MatDialog) {
        super(dialog)
    }

    ngOnInit() {



        // testing

        this.visitsSer.testService().subscribe( (
            data: BarMenu[]) => {
                console.log('**************************** TESTING' + data);
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
        )
        /*
        this.summeryData = data.result['data'];
        this.resultData = data.result['data'];
 */
        this.visitsSer.getVisitSummery().subscribe((data: VisitsResponse[]) =>  {
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

    // @ViewChild (CreateVisitDialogComponent) createVisit: CreateVisitDialogComponent
};



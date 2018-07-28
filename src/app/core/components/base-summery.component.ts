import { Component, OnInit, ViewChild, Inject, AfterViewInit, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog,  MAT_DIALOG_DATA} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {SelectButtonModule} from 'primeng/selectbutton';
import { VisitsService } from '../../services/visit.service';
import { VisitsResponse } from '../../models/IVisit-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'fc-base-summery',
    templateUrl: 'base-summery.component.html',
    styleUrls: ['./base-summery.component.scss']
})

export class BaseSummeryComponent implements OnInit, AfterViewInit {

@Input() filtersFormList: string[];

@Input() summeryData: any;

@Input() summeryColumnsData: any;

resultData: VisitsResponse[];


    selected = 'option1';
    selected2 = 'l2';
    fullImagePath: string;
    showHide: boolean;
    message: string = null;

    filtersFormControl = new FormControl();
   /*  VisitFormList = ['Cafe Self-Assessment 2016', 'Cafe Visit - Top 10', 'CSQM - 2016', 'Warehouse Inspection Audit',
                    'Crest Foods Inc. Assessment-Rev', 'Critical Infraction Letter']; */
    FranchiseID = new FormControl();
    FranchiseIDList = ['2043 - Franklin Mills', '2049 - Lakeline Mall (CB-WP)', '2066 - Pembroke', '2071 - Sandhill',
                        '2076k - Allen Event Center'];



    displayedColumns = ['select', 'VisitNumber', 'VisitForm', 'Status', 'FranchiseId',
                            'TaskAssigned', 'VisitStartDate', 'ScheduleDate', 'ConsultantScore',
                            'OwnerScore', 'VisitCompletionDate', 'CreateionDate', 'Consultant',
                            'OriginalScheduleDate', 'VisitModifiedDate', 'ActionPlanCompletionDate', 'Action'];

    // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    dataSource = new MatTableDataSource<MyResponse>(this.summeryData);
    // selection = new SelectionModel<Element>(true, []);
    selection = new SelectionModel<MyResponse>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog) {
        this.fullImagePath = 'assets/images/buildLogo.png';
        // this.showHide = true;
      };

    ngAfterViewInit () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      };

      ngOnInit() {

         // this.summeryData = []; // VISIT_DATA;
/*
        this.visitsService.getVisitSummery().subscribe((data: VisitsResponse[]) =>  {
            this.resultData = data
            console.log(`[BASE-SUMMERY-COMPONENT]${data}`);
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
    ); */



    };


    createVisitDialog() {
        /* this.dialog.open(CreateNewItemDialogComponent, {
          // height:'500px',
          width: '538px',

        }); */
      };

    changeShowStatus() {
        this.showHide = !this.showHide;
      };

      isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      };
      masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
      }
    };

    export interface MyResponse {
      visitNumber: string;
      visitId: string;
      visitName: string;
      visitStartDateTime: string;
      creationDate: string;
    }

  /*   @Component ({
        moduleId: module.id,
        selector: 'fc-create-new-item',
        templateUrl: './create-new-item.component.html',
        styleUrls: ['./create-new-item.component.scss']
      })
      export class CreateNewItemDialogComponent {

        VisitForm = new FormControl();
        VisitFormList = ['Cafe Self-Assessment 2016', 'Cafe Visit - Top 10', 'CSQM - 2016', 'Warehouse Inspection Audit',
                        'Crest Foods Inc. Assessment-Rev', 'Critical Infraction Letter'];
        FranchiseID = new FormControl();
        FranchiseIDList = ['2043 - Franklin Mills', '2049 - Lakeline Mall (CB-WP)', '2066 - Pembroke', '2071 - Sandhill',
                            '2076k - Allen Event Center'];

        types: SelectItem[];
        selectedTypes: string[] = ['Start Now'];

        constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
          this.types = [
            {label: 'Start Now', value: 'Start Now'},
            {label: 'Schedule', value: 'Schedule'},
            {label: 'Schedule Later', value: 'Schedule Later'}
        ];

        }
      } */



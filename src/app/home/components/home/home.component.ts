
import { CustomDashboardDialogComponent } from './custom-dashboard/custom-dashboard.component';

import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'fc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  @input someproperty;

    title = 'app';
    funnel: string ;
    piechart: string ;
    barchart: string ;
    linechart: string ;
    bubblechart: string ;
    donut: string ;
    comparision: string ;
    selected = 'option1';
    editWidget = false;
    showMessage = false;

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */




    constructor(public dialog: MatDialog) {
      this.piechart = '../../../../assets/images/piechart.jpg';
      this.barchart = '../../../../assets/images/barchart.jpg';
      this.funnel = '../../../../assets/images/funnel.jpg';
      this.linechart = '../../../../assets/images/linechart.jpg';
      this.bubblechart = '../../../../assets/images/bubblechart.jpg';
      this.donut = '../../../../assets/images/donut.jpg';
        this.comparision = '../../../../assets/images/comparision.jpg';

    }

      openDialog() {
        this.dialog.open(CustomDashboardDialogComponent, {
          width: '550px'

        });
      }


}

export interface Element {
    name: string;
    position: string;
    weight: number;
    symbol: string;
  }

  const ELEMENT_DATA: Element[] = [
    {position: 'Evette Riojas', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 'Jeanmarie Schwalb', name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 'Trista Detty', name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 'Janett Lovan', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 'Williemae Tollett', name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 'Tanner Hammack', name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 'Sherman Mccrary', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 'Shavonne Mckeel', name: 'Oxygen', weight: 15.9994, symbol: 'O'},

  ];





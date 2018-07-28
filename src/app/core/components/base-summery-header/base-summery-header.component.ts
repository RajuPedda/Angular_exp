import { Component, OnInit } from '@angular/core';


@Component({
selector: 'fc-base-summery-header',
moduleId: module.id,
styleUrls: ['./base-summery-header.component.scss'],
templateUrl: './base-summery-header.component.html'

})

export class BaseSummeryHeaderComponent implements OnInit {

    showHide: boolean;

    ngOnInit() {
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }
}

import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
// app
import { MenuItem } from './menu/menu.common';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'fc-main-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.visits',
            link: ['/visits']
        },
        {
            title: 'menu.tasks',
            link: ['/tasks']
        },
        {
            title: 'menu.reports',
            link: ['/reports']
        }
    ];

    constructor(translate: TranslateService) {
        translate.setTranslation('en', require('../assets/i18n/en.json'));
        translate.setDefaultLang('en');
        translate.use('en');
    }
}

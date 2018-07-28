import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tasks',
        loadChildren: 'app/_tasks/tasks.module#TasksModule'
    },
    {
        path: 'visits',
        loadChildren: 'app/_visits/visits.module#VisitsModule'
    },
    {
        path: 'reports',
        loadChildren: 'app/_reports/reports.module#ReportsModule'
    }

];

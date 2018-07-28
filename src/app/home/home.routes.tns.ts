import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'task',
        loadChildren: './app/+task/tasks.module#TasksModule'
        // TODO: Uncomment below line when building for webpack
        // loadChildren: '../+task/tasks.module#TasksModule'
    },
    {
        path: 'visit',
        loadChildren: './app/+visit/visits.module#VisitsModule'
    }
];

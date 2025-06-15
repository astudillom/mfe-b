import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app').then(m => m.App)
    },
    {
        path: 'page-one',
        loadComponent: () => import('./pages/page-one/page-one').then(m => m.PageOne)
    },
    {
        path: 'page-two',
        loadComponent: () => import('./pages/page-two/page-two').then(m => m.PageTwo)
    }
];

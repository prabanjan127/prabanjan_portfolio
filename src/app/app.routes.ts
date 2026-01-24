import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page/contact-page').then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

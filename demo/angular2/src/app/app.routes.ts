import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home';

export const APP_ROUTE: Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);

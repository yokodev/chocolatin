import { ModuleWithProviders } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';
import { Home } from './components/home';

const HOME: Route = {
  path: '',
  component: Home,
}

const OTHER: Route = {
  path: '**',
  redirectTo: 'home',
};

export const APP_ROUTE: Routes = [
  HOME,
  OTHER,
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);

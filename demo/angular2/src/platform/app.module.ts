import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PROVIDERS } from './providers';
import { COMPONENTS, DIRECTIVES } from './components';
import { APP_ROUTER_PROVIDERS } from '../app/app.routes';
import { App } from '../app';

/**
 * Bootstrap AppModule
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTER_PROVIDERS,
  ],
  declarations: [App, ...COMPONENTS, ...DIRECTIVES],
  providers: [...PROVIDERS],
  bootstrap: [App],
})
export class AppModule {
}

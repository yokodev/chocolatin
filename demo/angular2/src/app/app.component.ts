import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('../critical.scss')],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {
}

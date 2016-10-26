import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  template: require('./home.html'),
  styles: [require('./home.scss')],
})
export class Home implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.log('Home Component init !');
  }
}

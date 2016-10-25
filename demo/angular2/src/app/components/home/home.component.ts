import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import './home.scss';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  template: require('./home.html'),
})
export class Home implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.log('Home Component init !');
  }
}

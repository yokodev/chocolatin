import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  ngOnInit(): void {
    console.log('Home Component init !');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routes = ['a1', 'a2', 'b1', 'b2', 'c1'];

  constructor() {}

  ngOnInit(): void {}
}

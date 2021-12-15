import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-fade',
  templateUrl: './header-fade.page.html',
  styleUrls: ['./header-fade.page.scss'],
})
export class HeaderFadePage implements OnInit {
  items = [];
  constructor() {
    this.items = new Array(200)
    this.items.fill(0).map(() => Math.random());
  }

  ngOnInit() {
  }

}

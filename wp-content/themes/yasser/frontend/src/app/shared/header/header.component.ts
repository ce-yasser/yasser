import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: Array<{ name: string; url: string; match: boolean }> = [];
  hideSm: boolean = true;
  constructor() { }

  ngOnInit() {
    this.routes = [{
      name: 'About',
      url: '/',
      match: true
    }, {
      name: 'Blog',
      url: '/blog',
      match: false
    }];
  }

}

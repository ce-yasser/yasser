import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: Array<{ name: string; url: string; match: boolean }> = [];
  burgerActive: boolean = false;
  constructor() { }

  ngOnInit() {
    this.routes = [{
      name: 'About',
      url: '/',
      match: true
    }, {
      name: 'Resume',
      url: '/resume',
      match: true
    }, {
      name: 'Blog',
      url: '/blog',
      match: false
    }, {
      name: 'Contact',
      url: '/contact',
      match: true
    }];
  }

}

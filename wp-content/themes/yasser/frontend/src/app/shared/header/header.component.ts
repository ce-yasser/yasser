import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routes: Array<{ name: string, url: string }> = [{
    name: 'About',
    url: '/'
  }, {
    name: 'Blog',
    url: '/blog'
  }];

}

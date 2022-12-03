import { Component } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts: any;

  constructor(
    private _endpoint: EndpointsService,
    private router: Router
  ) {
    this._endpoint.getPosts({ per_page: 6, _embed: 1 }).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  goToPost(slug: string) {
    this.router.navigate(['blog', slug]);
  }
}

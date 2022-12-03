import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EndpointsService } from 'src/app/service/endpoints.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post: any;
  constructor(
    private _endpoint: EndpointsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this._endpoint.getPosts({ per_page: 1, slug: params['slug'], _embed: 1 }).subscribe(posts => {
        console.log(posts);
        this.post = posts[0];
      })
    });
  }
}
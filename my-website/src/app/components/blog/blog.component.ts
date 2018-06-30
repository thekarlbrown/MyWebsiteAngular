import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogPost: string;
  public routeSubscriber: Subscription;
  blogContent: string;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService) {
   }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(result => {
      this.blogPost = result['post'];
      this.blogContent = this.blogService.getPost(this.blogPost);
    });
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }

}

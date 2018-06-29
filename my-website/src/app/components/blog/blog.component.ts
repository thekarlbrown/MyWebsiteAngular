import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogPost: string;
  public routeSubscriber: Subscription;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(result => {
      this.blogPost = result['post'];
    });
    console.log(JSON.stringify(this.route.snapshot.params['post']));
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }

}

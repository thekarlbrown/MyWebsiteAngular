import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public blogPost: string;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.blogPost = this.route.snapshot.params['post'];
    console.log(JSON.stringify(this.route.snapshot.params['post']));
  }

}

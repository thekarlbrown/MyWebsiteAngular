import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private router: Router) {
  }

  // Forces Angular router to reload components when routing to the same component
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
      }
  });
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogService } from './services/blog.service';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:post', component: BlogComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: '**', component: AboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AboutComponent,
    ProjectsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent],
  exports: [
    MenuBarComponent,
    AboutComponent,
  ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ MenuBarComponent ]
})
export class AppModule { }

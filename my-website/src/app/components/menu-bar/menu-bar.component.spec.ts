import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from '../../app.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';


describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuBarComponent
      ],
      imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot()
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(function () {
    $('a.dropdown-toggle').trigger('click');
  });

  it('confirm component loads dropdown in navbar', function() {
    expect( $('li.dropdown').find('div.dropdown-menu-show')['length'] === 1).toBe(true);
  });
});

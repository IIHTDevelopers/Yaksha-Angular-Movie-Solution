import { TestBed, async, ComponentFixture, fakeAsync, tick, inject } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';

import { DebugElement } from "@angular/core";
import { SelectMovieComponent } from '../select-movie/select-movie.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent, BreadcrumbComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  }));

  describe("boundary", ()=>{
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
  })

});

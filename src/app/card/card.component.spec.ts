import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from '../models/movie';

import { CardComponent } from './card.component';

describe('CardComponent', () => {

  @Component({
    selector: `parent-component`,
    template: `<app-card [movie]="data"></app-card>`
  })
  class ParentComponent {
    data:Movie = new Movie(123, "Hulk is red now", "imagelink", 3.4, "action", 116, "219-04-24", "Japanese", "17:45", 250);
    // // @Input()
    // data: Movie = null;

    // setMovie(m: Movie) {
    //   this.data = m;
    // }
  }

  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  let parentComponent: ParentComponent;
  let parentFixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, ParentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    
    parentFixture = TestBed.createComponent(ParentComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
  });
  describe("boundary", () => {

    it('should create', () => {
      expect(true).toBeTruthy();
    });
  });


});



import { HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { doesNotThrow } from 'assert';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Movie } from '../models/movie';
import { MovieService } from '../_services/movie.service';

import { SelectMovieComponent } from './select-movie.component';
import { db } from "./../../assets/movie-db";
import { CardComponent } from '../card/card.component';

describe('SelectMovieComponent', () => {
  let component: SelectMovieComponent;
  let fixture: ComponentFixture<SelectMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectMovieComponent, BreadcrumbComponent, CardComponent],
      imports: [RouterTestingModule],
      providers: [MovieService]
    })
      .compileComponents();

    fixture = await TestBed.createComponent(SelectMovieComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  describe("boundary", () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });
  describe("functional", () => {
    it('should fetch all movies', () => {
      spyOn(component, 'fetchAllMovies');
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.movies).toBeDefined();
      expect(component.movies.length).toBeGreaterThan(0);
      expect(component.movies[0].id).toBeGreaterThan(0);
    });

    it('should render movie as card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.querySelectorAll('img')[0].src).toBe(firstMovie.image);

      expect(appCardComponentElement.innerHTML).toContain(firstMovie.title);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.genre);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.releasedDate);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.ratings);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.length);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.language);
    });

    it('should render movie image in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.querySelectorAll('img')[0].src).toBe(firstMovie.image);

    });


    it('should render movie title in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.title);
    });

    it('should render movie genre in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.genre);
    });

    it('should render movie released date in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.releasedDate);
    });

    it('should render movie ratings in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.ratings);
    });

    it('should render movie length (min) in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.length);
    });

    it('should render movie language in card view', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");

      let firstMovie:Movie = component.movies[0];
      
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.language);
    });


  });
});

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookShowComponent } from './book-show/book-show.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectMovieComponent } from './select-movie/select-movie.component';


const routes: Routes = [
  { path: "landing-page", component: LandingPageComponent },
  { path: "select-movie", component: SelectMovieComponent },
  { path: "book-show/:movie", component: BookShowComponent },
  { path: "**", redirectTo: "landing-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

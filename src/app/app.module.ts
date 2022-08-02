import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { PostTicketComponent } from './post-ticket/post-ticket.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store';
import { TicketEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectMovieComponent } from './select-movie/select-movie.component';
import { BookShowComponent } from './book-show/book-show.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTicketComponent,
    PostTicketComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SelectMovieComponent,
    BookShowComponent,
    BreadcrumbComponent,
    CardComponent,
    MovieTicketComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ tickets: reducer }),
    EffectsModule.forRoot([TicketEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
    NgbModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

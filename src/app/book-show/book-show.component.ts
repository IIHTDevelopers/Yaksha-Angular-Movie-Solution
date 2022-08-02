import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromTickets from "../store";
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { Ticket } from '../models/titcket';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  bookingForm:FormGroup;
  selectedMovie:Movie;
  totalPrice:number = 0;
  message:string = "";
  ticket:Ticket = null;

  constructor(private activatedRoute:ActivatedRoute, private _store: Store<fromTickets.TicketState>) { 
    this.bookingForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      seats: new FormControl("1", [Validators.required])
    })

    this.activatedRoute.params.subscribe(params=>{
      this.selectedMovie = JSON.parse(params['movie']);
    })
  }

  ngOnInit() {
    // this.selectedMovie = JSON.parse(localStorage.getItem("selectedMovie")||null);
    // this.selectedMovie = this.movieService.movie;

    // console.log(this.selectedMovie)

      this.updateTotalPrice();
  }

  updateTotalPrice(){
    if(this.selectedMovie == null ){
      this.message = "Booking failed";
    } else {
      this.message = "";
      this.totalPrice = this.selectedMovie.price * this.bookingForm.value.seats;
    }
  }
  
  bookTicket(){
    if(this.selectedMovie == null ){
      this.message = "Booking failed";
    } else {
      this.message = "";
      this.ticket = {...this.bookingForm.value, movieId: this.selectedMovie.id, paid: this.totalPrice};

      this._store.dispatch(new fromTickets.PostTicket(this.ticket));
   
      const tickets$ = this._store.pipe(select(fromTickets.allTickets));
   
      tickets$.subscribe(res => {
        // this.isLoading = res.isLoading;
      });

    }
    }

    // public onSubmit() {
    //   this._store.dispatch(new fromTickets.PostTicket(this.bookingForm.value));
   
    //   const tickets$ = this._store.pipe(select(fromTickets.allTickets));
   
    //   tickets$.subscribe(res => {
    //     // this.isLoading = res.isLoading;
    //   });
    // }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as fromTickets from "../store";
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-post-ticket',
  templateUrl: './post-ticket.component.html',
  styleUrls: ['./post-ticket.component.css']
})
export class PostTicketComponent implements OnInit {

  FG:FormGroup;
  isLoading: boolean;
 
  constructor(private _store: Store<fromTickets.TicketState>) { 
    this.FG = new FormGroup({
      // ticketId: new FormControl(101),
      // id: new FormControl(2000),
      mobile: new FormControl(''),
      email: new FormControl(''),
      seats: new FormControl(1),
      movieId: new FormControl(1),
      paid: new FormControl(100)
    })
  }
 
  ngOnInit() {
  }
 
  public onSubmit() {
    this._store.dispatch(new fromTickets.PostTicket(this.FG.value));
 
    const tickets$ = this._store.pipe(select(fromTickets.allTickets));
 
    tickets$.subscribe(res => {
      this.isLoading = res.isLoading;
    });
  }
}
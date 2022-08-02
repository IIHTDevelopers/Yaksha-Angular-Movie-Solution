import { Component, OnInit } from '@angular/core';
import * as fromTickets from "../store";
import { Store, select } from '@ngrx/store';
import { Ticket } from '../models/titcket';
// import { ITicket } from '../_interfaces/ticket';

 
@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent implements OnInit {
  tickets: Ticket[] = [];
  public isLoading: boolean;
  constructor(
    private _store: Store<fromTickets.TicketState>) { }
 
  ngOnInit() {
    this._store.dispatch(new fromTickets.GetTicketLoad());
    const tickets$ = this._store.pipe(select(fromTickets.allTickets));
 
    tickets$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.tickets = res.data;
    });
  }
 
  public loadFirstTen(): void {
    const firstTenTickets$ = this._store.pipe(select(fromTickets.firstTenTickets));
 
    firstTenTickets$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.tickets = res.data;
    });
  }
}


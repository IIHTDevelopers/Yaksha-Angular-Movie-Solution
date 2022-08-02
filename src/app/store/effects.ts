import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { TicketService } from '../_services/ticket.service';
import { Action } from '@ngrx/store';
import * as fromTickets from '.'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Ticket } from '../models/titcket';
// import { ITicket } from '../_interfaces/ticket';

 
@Injectable()
export class TicketEffects {
 
    constructor(private actions$: Actions,
        private ticketService: TicketService) {
    }
 
    @Effect()
    getTickets$: Observable<Action> = this.actions$.pipe(
        ofType(fromTickets.TicketActionTypes.GetTicketLoad),
        mergeMap(() =>
            this.ticketService.getAllTickets().pipe(
                map((ticket: Ticket[]) => {
                    return new fromTickets.GetTicketSuccess(ticket);
                }),
                catchError((error) =>
                    of(new fromTickets.GetTicketFail(error)))
            )
        ));
 
    @Effect()
    postTicket$: Observable<Action> = this.actions$.pipe(
        ofType(fromTickets.TicketActionTypes.PostTicket),
        map((action: fromTickets.PostTicket) => action.payload),
        mergeMap((ticket: Ticket) =>
            this.ticketService.bookTicket(ticket).pipe(
                map((ticket: Ticket) => {
                    return new fromTickets.PostTicketSuccess(ticket);
                }),
                catchError((error) =>
                    of(new fromTickets.PostTicketFail(error)))
            )
        ));
}


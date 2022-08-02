import { Action } from '@ngrx/store';
// import { ITicket } from '../_interfaces/ticket';

import { HttpErrorResponse } from '@angular/common/http';
import { Ticket } from '../models/titcket';
 
export enum TicketActionTypes {
    GetTicketLoad = '[Ticket] Get Ticket',
    GetTicketSuccess = '[Ticket] Get Ticket Success',
    GetTicketFail = '[Ticket] Get Ticket Fail',
    PostTicket = '[Ticket] Post Ticket',
    PostTicketSuccess = '[Ticket] Post Ticket Success',
    PostTicketFail = '[Ticket] Post Ticket Fail',
}
 
 
export class GetTicketLoad implements Action {
    public readonly type = TicketActionTypes.GetTicketLoad;
}
 
export class GetTicketSuccess implements Action {
    public readonly type = TicketActionTypes.GetTicketSuccess;
 
    constructor(public payload: Ticket[]) { }
}
 
export class GetTicketFail implements Action {
    public readonly type = TicketActionTypes.GetTicketFail;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export class PostTicket implements Action {
    public readonly type = TicketActionTypes.PostTicket;
 
    constructor(public payload: Ticket) { }
}
 
export class PostTicketSuccess implements Action {
    public readonly type = TicketActionTypes.PostTicketSuccess;
 
    constructor(public payload: Ticket) { }
}
 
export class PostTicketFail implements Action {
    public readonly type = TicketActionTypes.PostTicketFail;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export type TicketActions = GetTicketLoad | GetTicketSuccess | GetTicketFail | PostTicket | PostTicketSuccess | PostTicketFail;

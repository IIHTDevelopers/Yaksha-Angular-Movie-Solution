import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/titcket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  host:string = " http://localhost:6565/tickets";

  constructor(private http:HttpClient) { }

  bookTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(this.host, ticket);
  }
  getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.host);
  }
}

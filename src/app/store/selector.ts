import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TicketState } from ".";
 
const getTicketState = createFeatureSelector<TicketState>('tickets');
 
export const allTickets = createSelector(getTicketState, (state: TicketState) => {
    return state;
});
 
export const firstTenTickets = createSelector(getTicketState, (state: TicketState) => {
    const tickets = state.data.slice(0, 10);
    return { ...state, data: tickets };
});

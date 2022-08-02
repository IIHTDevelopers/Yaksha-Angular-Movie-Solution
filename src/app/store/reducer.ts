// import { ITicket } from '../_interfaces/ticket';

import { Ticket } from '../models/titcket';
import { TicketActions, TicketActionTypes } from './actions';
 
 
export interface TicketState {
    data: Ticket[];
    isLoading: boolean;
    message: string;
}
 
const initialState: TicketState = {
    data: [],
    isLoading: false,
    message: ''
};
 
export function reducer(state = initialState, action: TicketActions): TicketState {
 
    switch (action.type) {
        case TicketActionTypes.GetTicketLoad: {
            return {
                ...state,
                isLoading: true
            }
        }
 
        case TicketActionTypes.GetTicketSuccess: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case TicketActionTypes.GetTicketFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        case TicketActionTypes.PostTicket: {
            return {
                ...state,
                isLoading: true
            }
        }
 
        case TicketActionTypes.PostTicketSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload); // as i am using testing api, I have                                pushed the data to change the state. For real apis, there is no need to. You can simply return the data.
            return {
                ...state,
                data: updatedData,
                isLoading: false,
                message: 'Data posted Successfully!'
            }
        }
        case TicketActionTypes.PostTicketFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        default:
            return state;
    }
}


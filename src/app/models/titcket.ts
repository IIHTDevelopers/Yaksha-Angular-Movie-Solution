// export class Ticket{
//     constructor(public id:number, public email:string, public mobile:string, public seats: number, public movieId: number, public paid: number){}
// }


export interface Ticket{
    id:number;
    email:string; 
    mobile:string; 
    seats: number; 
    movieId: number; 
    paid: number;
}
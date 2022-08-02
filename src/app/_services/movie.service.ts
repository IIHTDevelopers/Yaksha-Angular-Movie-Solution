import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private m:Movie = null;

  host:string = "http://localhost:6565/movies";

  constructor(private http:HttpClient) { }

  getAllMovies(){
    return this.http.get(this.host);
  }

  set movie(m:Movie){
    this.m = m;
  }
  get movie(){
    return this.m;
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovie(page = 1){
    return this.http.get(this.baseApiPath+`/movie/popular?page=$(page)&api_key=`+this.getApiKey());
  }
  getMovieDetails(filmeid){
    return this.http.get(this.baseApiPath+`/movie/${filmeid}?api_key=`+this.getApiKey());
  }
  getApiKey(): string{
    return "3ad6fd1789dca84c77744e01320db3da";
  }
}

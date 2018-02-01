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
  getLatestMovie(){
    return this.http.get(this.baseApiPath+"/movie/popular?api_key="+this.getApiKey());
  }
  getApiKey(): string{
    return "chave vai aqui";
  }
}

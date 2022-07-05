import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GameList } from '../interfaces/Games.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl: string = environment.baseUrl
  apiKey: string = environment.apiKey


  constructor( private http : HttpClient) { }

  getGameList(): Observable<GameList>{
    return this.http.get<GameList>(`${this.baseUrl}/games?&key=${this.apiKey}`)
  }


}

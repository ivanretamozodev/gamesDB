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

  //games shows in caroussel
  getLatestGames(): Observable<GameList>{
    return this.http.get<GameList>(`${this.baseUrl}/games?dates=2022-01-01,2022-12-31&ordering=-added?&key=${this.apiKey
  }`)
  }

  getGameList(): Observable<GameList>{
    return this.http.get<GameList>(`${this.baseUrl}/games?&key=${this.apiKey}`)
  }


}

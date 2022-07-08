import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GameList } from '../interfaces/Games.interface';
import { GameDetail } from '../interfaces/GameDetails.interface';
import { GameImagesResponse } from '../interfaces/GameImages.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl: string = environment.baseUrl
  apiKey: string = environment.apiKey
  


  constructor( private http : HttpClient) { }

  //games shows in caroussel
  getLatestGames(): Observable<GameList>{
    return this.http.get<GameList>(`${this.baseUrl}/games?dates=2022-01-01,2022-12-31&ordering=-rating?&key=${this.apiKey
  }`)
  }
  
  //games shows in initial display
  getGameList(): Observable<GameList>{
    return this.http.get<GameList>(`${this.baseUrl}/games?&key=${this.apiKey}`)
  }

  //get game details page
  getGameDetails(id:string):Observable<GameDetail>{
    return this.http.get<GameDetail>(`${this.baseUrl}/games/${id}?key=${this.apiKey}`)}
    
  //get images for details components
  getImagesOfGames(id: number): Observable<GameImagesResponse>{
    return this.http.get<GameImagesResponse>(`${this.baseUrl}/games/${id}/screenshots?key=${this.apiKey}`)
  }

}

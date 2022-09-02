import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GameList } from '../interfaces/Games.interface';
import { GameDetail } from '../interfaces/GameDetails.interface';
import { GameImagesResponse } from '../interfaces/GameImages.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  //juegos que se muestran en el carousel
  getLatestGames(): Observable<GameList> {
    return this.http.get<GameList>(
      `${this.baseUrl}/games?dates=2022-06-01,2022-12-31&ordering=-rating?&key=${this.apiKey}`
    );
  }
  //buscar juegos por generos
  getGamesByGenres(genre: string): Observable<GameList> {
    return this.http.get<GameList>(
      `${this.baseUrl}/games?genres=${genre}&key=${this.apiKey}`
    );
  }

  //juegos por defecto en la pagina principal
  getGameList(page: string = '1'): Observable<GameList> {
    return this.http.get<GameList>(
      `${this.baseUrl}/games?key=${this.apiKey}&page=${page}`
    );
  }

  //los detalles de los juegos individuales
  getGameDetails(id: string): Observable<GameDetail> {
    return this.http.get<GameDetail>(
      `${this.baseUrl}/games/${id}?key=${this.apiKey}`
    );
  }

  //obtener las imagenes de manera individial de cada juego
  getImagesOfGames(id: number): Observable<GameImagesResponse> {
    return this.http.get<GameImagesResponse>(
      `${this.baseUrl}/games/${id}/screenshots?key=${this.apiKey}`
    );
  }
  //buscador de juegos
  searchGame(searchValue: string) {
    return this.http.get<GameList>(
      `${this.baseUrl}/games?search=${searchValue}&key=${this.apiKey}`
    );
  }
}

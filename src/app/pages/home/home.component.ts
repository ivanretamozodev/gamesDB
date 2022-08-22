import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game-service.service';
import { GameList, Result } from '../interfaces/Games.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private gameservice: GameService) {}
  isAvailable: boolean = false;
  actionGames: Result[] = [];
  latestGames: Result[] = [];
  racingGames!: Result[];
  shooterGames!: Result[];

  ngOnInit(): void {
    this.gameservice
      .getGamesByGenres('racing')
      .subscribe((games) => (this.racingGames = games.results.slice(0, 6)));

    this.gameservice
      .getGamesByGenres('action')
      .subscribe((games) => (this.actionGames = games.results.slice(0, 6)));

    this.gameservice
      .getGamesByGenres('shooter')
      .subscribe((games) => (this.shooterGames = games.results.slice(0, 6)));

    this.gameservice.getLatestGames().subscribe((games) => {
      this.latestGames = games.results;
      this.isAvailable = true;
    });
  }
}

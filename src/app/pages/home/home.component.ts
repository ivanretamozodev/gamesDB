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
  gamelist: Result[] = [];
  latestGames: Result[] = [];

  ngOnInit(): void {
    this.gameservice.getGameList().subscribe((gamelist: GameList) => {
      this.gamelist = gamelist.results.slice(0, 6);
    });

    this.gameservice.getLatestGames().subscribe((games) => {
      this.latestGames = games.results;
      this.isAvailable = true;
    });
  }
}

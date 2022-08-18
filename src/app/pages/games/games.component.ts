import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/Games.interface';
import { GameService } from '../services/game-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  isAvailable: boolean = false;
  games: Result[] = [];

  constructor(private game: GameService) {}

  ngOnInit(): void {
    this.game.getGameList().subscribe((games) => {
      this.games = games.results;
      this.isAvailable = true;
    });
  }

  getGamePage(pageNum: string) {
    this.game.getGameList(pageNum).subscribe((games) => {
      this.games = games.results;
      this.isAvailable = true;
    });
  }

  paginate(event: any) {
    const pageNum = event.page + 1;
    this.getGamePage(pageNum);
  }
}

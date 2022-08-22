import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/Games.interface';
import { GameService } from '../services/game-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  searchBinding: string = '';
  isAvailable: boolean = false;
  games: Result[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGameList().subscribe((games) => {
      this.games = games.results;
      this.isAvailable = true;
    });
  }

  getGamePage(pageNum: string) {
    this.gameService.getGameList(pageNum).subscribe((games) => {
      this.games = games.results;
      this.isAvailable = true;
    });
  }

  changeSearch() {
    console.log(this.searchBinding);
    this.gameService.searchGame(this.searchBinding).subscribe((games) => {
      this.games = games.results;
    });
  }

  paginate(event: any) {
    const pageNum = event.page + 1;
    this.getGamePage(pageNum);
  }
}

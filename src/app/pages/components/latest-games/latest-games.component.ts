import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game-service.service';
import { Result } from '../../interfaces/Games.interface';

@Component({
  selector: 'app-latest-games',
  templateUrl: './latest-games.component.html',
  styleUrls: ['./latest-games.component.css'],
})
export class LatestGamesComponent implements OnInit {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  constructor(private gameservice: GameService) {}

  games!: Result[];

  ngOnInit(): void {
    this.gameservice.getLatestGames().subscribe((resp) => {
      this.games = resp.results.slice(0, 12);
    });
  }
}

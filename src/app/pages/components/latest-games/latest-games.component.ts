import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game-service.service';
import { Result } from '../../interfaces/Games.interface';

@Component({
  selector: 'app-latest-games',
  templateUrl: './latest-games.component.html',
  styleUrls: ['./latest-games.component.css'],
})
export class LatestGamesComponent {
  @Input() games: Result[] = [];

  constructor(private gameservice: GameService) {}
}

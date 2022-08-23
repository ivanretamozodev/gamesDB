import { Component, Input, OnInit } from '@angular/core';
import { GameDetail } from '../../interfaces/GameDetails.interface';

@Component({
  selector: 'game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  @Input() gameDetails!: GameDetail;

  constructor() {}
}

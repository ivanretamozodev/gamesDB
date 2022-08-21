import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game-service.service';
import { GameDetail } from '../interfaces/GameDetails.interface';
import { GameImagesResponse, images } from '../interfaces/GameImages.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  gameDetails!: GameDetail;
  images!: images[];
  isAvailable: boolean = false;

  constructor(
    private gameservice: GameService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe(({ id }) => {
      this.gameservice.getGameDetails(id).subscribe((games: GameDetail) => {
        this.gameDetails = games;
        this.isAvailable = true;
      });
    });
    this.activatedroute.params.subscribe(({ id }) => {
      this.gameservice
        .getImagesOfGames(id)
        .subscribe((images: GameImagesResponse) => {
          this.images = images.results;
        });
    });
  }
}

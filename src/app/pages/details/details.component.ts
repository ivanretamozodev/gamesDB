import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game-service.service';
import { GameDetail } from '../interfaces/GameDetails.interface';
import { GameImagesResponse, images } from '../interfaces/GameImages.interface';
import { Subscription, observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameDetails!: GameDetail;
  images!: images[];
  isAvailable: boolean = false;
  listObservables$: Subscription[] = [];

  constructor(
    private gameservice: GameService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const detailsObservable$: Subscription =
      this.activatedroute.params.subscribe(({ id }) => {
        this.gameservice.getGameDetails(id).subscribe((games: GameDetail) => {
          this.gameDetails = games;
          this.isAvailable = true;
        });
      });

    const imageObservables: Subscription = this.activatedroute.params.subscribe(
      ({ id }) => {
        this.gameservice
          .getImagesOfGames(id)
          .subscribe((images: GameImagesResponse) => {
            this.images = images.results;
          });
      }
    );
    this.listObservables$ = [imageObservables, detailsObservable$];
  }
  ngOnDestroy(): void {
    this.listObservables$.forEach((observable) => observable.unsubscribe());
  }
}

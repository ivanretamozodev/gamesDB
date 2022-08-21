import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng/primeng.module';
import { LatestGamesComponent } from './components/latest-games/latest-games.component';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GalleriaComponent } from './components/galleria/galleria.component';

@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent,
    HomeComponent,
    LatestGamesComponent,
    GamesComponent,
    GameDetailsComponent,
    GalleriaComponent,
  ],
  imports: [CommonModule, PrimengModule],
  exports: [CardComponent, DetailsComponent, HomeComponent],
})
export class PagesModule {}

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
import { CarouselComponent } from './components/carousel/carousel.component';
import { pagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent,
    HomeComponent,
    LatestGamesComponent,
    GamesComponent,
    GameDetailsComponent,
    GalleriaComponent,
    CarouselComponent,
  ],
  imports: [pagesRoutingModule, PrimengModule],
  exports: [HomeComponent],
})
export class PagesModule {}

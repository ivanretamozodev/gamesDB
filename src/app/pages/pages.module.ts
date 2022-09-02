import { NgModule } from '@angular/core';
//modulos creados
import { PrimengModule } from '../primeng/primeng.module';
//componentes
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { HomeComponent } from './home/home.component';
import { pagesRoutingModule } from './pages-routing.module';
import { LatestGamesComponent } from './components/latest-games/latest-games.component';

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

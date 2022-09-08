import { NgModule } from '@angular/core';
//modulos creados
import { PrimengModule } from '../primeng/primeng.module';
//componentes
import { CardComponent } from './components/card/card.component';

import { DetailsComponent } from './details/details.component';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { HomeComponent } from './home/home.component';
import { pagesRoutingModule } from './pages-routing.module';
import { LatestGamesComponent } from './components/latest-games/latest-games.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { PlatformPageComponent } from './platform-page/platform-page.component';

@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent,
    HomeComponent,
    LatestGamesComponent,
    GamesComponent,
    GameDetailsComponent,
    GalleriaComponent,
    PlatformsComponent,
    PlatformPageComponent,
  ],
  imports: [pagesRoutingModule, PrimengModule],
  exports: [HomeComponent],
})
export class PagesModule {}

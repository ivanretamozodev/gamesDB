import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { PlatformPageComponent } from './platform-page/platform-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'details/:id', component: DetailsComponent },
            { path: 'allgames', component: GamesComponent },
            { path: 'platforms/:id/:name', component: PlatformPageComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pagesRoutingModule {}

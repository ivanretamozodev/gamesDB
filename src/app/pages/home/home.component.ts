import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../services/game-service.service';

import { PlatformService } from '../services/platform.service';
import { PlatformResult } from '../interfaces/Platform.interface';
import { Result } from '../interfaces/Games.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(private gameservice: GameService, private _platformService: PlatformService) {}

    platforms: PlatformResult[] = [];
    isAvailable: boolean = false;
    actionGames: Result[] = [];
    latestGames: Result[] = [];
    racingGames!: Result[];
    shooterGames!: Result[];
    listObservables$: Subscription[] = [];

    ngOnInit(): void {
        const racingGames$: Subscription = this.gameservice
            .getGamesByGenres('racing')
            .subscribe((games) => (this.racingGames = games.results.slice(0, 6)));

        const actionGames$: Subscription = this.gameservice
            .getGamesByGenres('action')
            .subscribe((games) => (this.actionGames = games.results.slice(0, 6)));

        const shooterGames$: Subscription = this.gameservice
            .getGamesByGenres('shooter')
            .subscribe((games) => (this.shooterGames = games.results.slice(0, 6)));

        const latestGames$: Subscription = this.gameservice.getLatestGames().subscribe((games) => {
            this.latestGames = games.results;
            this.isAvailable = true;

            this._platformService
                .getAllPlatforms$()
                .subscribe((response: PlatformResult[]) => (this.platforms = response));
        });

        this.listObservables$ = [racingGames$, actionGames$, latestGames$, shooterGames$];
    }
    ngOnDestroy(): void {
        this.listObservables$.forEach((observable) => observable.unsubscribe());
    }
}

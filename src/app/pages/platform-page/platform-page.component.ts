import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platform.service';
import { GameList, Result } from '../interfaces/Games.interface';

@Component({
    selector: 'app-platform-page',
    templateUrl: './platform-page.component.html',
    styleUrls: ['./platform-page.component.css']
})
export class PlatformPageComponent implements OnInit {
    gamelist: Result[] = [];

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _PlatformService: PlatformService
    ) {}

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(({ id, name }) => {
            this._PlatformService
                .getGamesByPlatform(id)
                .subscribe((response) => (this.gamelist = response));
        });
    }
}

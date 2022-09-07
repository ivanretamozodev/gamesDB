import { Component, Input, OnInit } from '@angular/core';
import { PlatformResult } from '../../interfaces/Platform.interface';

@Component({
    selector: 'app-platforms',
    templateUrl: './platforms.component.html',
    styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
    @Input() platforms: PlatformResult[] = [];

    constructor() {}

    ngOnInit(): void {}
}

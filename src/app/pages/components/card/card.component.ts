import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/Games.interface';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() gamelist: Result[] = [];

    @Input() category: string = '';

    constructor() {}

    ngOnInit(): void {}
}

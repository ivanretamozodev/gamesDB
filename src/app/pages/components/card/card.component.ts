import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/Games.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() game!: Result

  constructor() { }

  ngOnInit(): void {
  }

}

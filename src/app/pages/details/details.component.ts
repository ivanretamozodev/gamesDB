import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game-service.service';
import { GameDetail } from '../interfaces/GameDetails.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  gameDetails! : GameDetail

  constructor(
    private gameservice:GameService,
    private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params
    .subscribe(({id}) =>{
    this.gameservice.getGameDetails(id)
    .subscribe((games : GameDetail) =>{
    this.gameDetails = games
    })
  })
  }

}

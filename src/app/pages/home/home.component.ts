import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game-service.service';
import { GameList, Result } from '../interfaces/Games.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameservice : GameService) { }

  gamelist: Result[] = []

  ngOnInit(): void {
    this.gameservice.getGameList()
    .subscribe((gamelist : GameList) => {
      console.log(gamelist)
      this.gamelist = gamelist.results
    })
  }

}

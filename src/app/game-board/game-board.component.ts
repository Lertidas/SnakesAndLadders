import { Component } from '@angular/core';
import { MyTile } from '../models/my-tile';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  boardData: MyTile[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      const myTile: MyTile = new MyTile();
      myTile.tileNumber = i;
      this.boardData.push(myTile);
    }
  }
}

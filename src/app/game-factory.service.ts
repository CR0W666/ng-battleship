import {Injectable} from '@angular/core';
import {FieldValue, IField, IGame} from './game.interface';
import {Game} from './game';
import { Field } from './field';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {
  readonly fieldSize = 6;

  generate(): IGame {
    return this.createGame(this.createField(), false);
  }

  createField(): Field[][] {
    let field: Field[][] = [];

      for (let y = 0; y < this.fieldSize; y++) {
        for (let x = 0; x < this.fieldSize; x++) {

          let value = Math.round(Math.random());
          const element: Field = new Field(value);
          const column = field[x] = field[x] || [];
          column[y] = element;

        }
      }

      return field;
  }

  createGame(field: Field[][], winState: boolean) {
    let game = new Game(field, winState);
    this.assignGame(game, field);
    return game;
  }

  assignGame(game: IGame, field: Field[][]) {
    for (let y = 0; y < this.fieldSize; y++) {
      for (let x = 0; x < this.fieldSize; x++) {
        field[x][y].currentGame = game;
      }
    }
  }

}



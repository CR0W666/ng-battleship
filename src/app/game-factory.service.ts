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
    const field: Field[][] = [];

    for (let y = 0; y < this.fieldSize; y++) {
        for (let x = 0; x < this.fieldSize; x++) {

          let value;
          if (Math.round(Math.random()) !== 0) { value = FieldValue.WATER; } else { value = FieldValue.SHIP_PART; }
          const element: Field = new Field(value, FieldValue.UNKNOWN);
          const column = field[x] = field[x] || [];
          column[y] = element;
        }
      }

    return field;
  }

  // tslint:disable-next-line:typedef
  createGame(field: Field[][], winState: boolean) {
    const game = new Game(field, winState);
    GameFactoryService.assignGame(game, field);
    return game;
  }

  // tslint:disable-next-line:typedef
  static assignGame(game: IGame, field: Field[][]) {
    // tslint:disable-next-line:prefer-for-of
    for (let y = 0; y < field.length; y++) {
      // tslint:disable-next-line:prefer-for-of
      for (let x = 0; x < field[y].length; x++) {
        field[y][x].currentGame = game;
      }
    }
  }

  // tslint:disable-next-line:typedef
  static checkWin(field: Field[][], doesEverythingHaveToBeDiscovered: boolean) {

    let returnCond = true;
    // tslint:disable-next-line:prefer-for-of
    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[0].length; x++) {

        if (field[y][x].actualValue === FieldValue.SHIP_PART) {
          returnCond = false;
        }
      }
    }

    if(doesEverythingHaveToBeDiscovered) {
      const isEverythingDiscovered = this.isEverythingDiscovered(field);

      if (isEverythingDiscovered) { return returnCond; } else { return false; }
    } else {
      return returnCond;
    }

  }

  static isEverythingDiscovered(field: Field[][]): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[0].length; x++) {


        if (field[y][x].value === FieldValue.UNKNOWN) {
          return false;
        }

      }
    }
    return true;
  }

}



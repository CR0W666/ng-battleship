
import { Game } from './game';
import { GameFactoryService } from './game-factory.service';
import {FieldValue, IField, IGame} from './game.interface';

export class Field implements IField {

    currentGame: IGame | undefined;
    value: FieldValue;
    actualValue: FieldValue;

    shoot(): IGame {

        let newField: Field[][] = [];
        let xSize = this.currentGame!.field   .length;
        let ySize = this.currentGame!.field[0].length;

        for (let y = 0; y < xSize; y++) {
          for (let x = 0; x < ySize; x++) {
            const element: Field = this.currentGame!.field[x][y];
            if(element === this) {

              if(this.actualValue == FieldValue.SHIP_PART) {
                //console.log("hit");
                this.value = this.actualValue = FieldValue.PART_OF_DESTROYED_SHIP;
              } else {
                //console.log("miss");
                this.value = this.actualValue;
              }

            }
            const column = newField[x] = newField[x] || [];
            column[y] = element;

          }
        }

        let newGame: IGame = new Game(newField, GameFactoryService.checkWin(newField, true));
        return newGame!;
    }

    constructor(actualValue: FieldValue, value: FieldValue) {
      this.actualValue = actualValue;
      this.value = value;
    }

}

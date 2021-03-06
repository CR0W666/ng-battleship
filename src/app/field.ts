
import { Game } from './game';
import {FieldValue, IField, IGame} from './game.interface';

export class Field implements IField {

    currentGame: IGame | undefined;
    readonly value: FieldValue;

    shoot(): IGame {





        let newField: IField[][] = [];
        let xSize = this.currentGame!.field   .length;
        let ySize = this.currentGame!.field[0].length;

        for (let y = 0; y < xSize; y++) {
          for (let x = 0; x < ySize; x++) {
            const element: IField = this.currentGame!.field[x][y];

            if(element === this) {

              if(element.value == FieldValue.SHIP_PART) {
                element.value = FieldValue.PART_OF_DESTROYED_SHIP;
              }

            }


            const column = newField[x] = newField[x] || [];
            column[y] = element;
          }
        }


        let newGame: IGame = new Game(newField, this.currentGame!.didWin);
        return newGame!;
    }

    constructor(value: FieldValue) {
        this.value = value;
    }

}

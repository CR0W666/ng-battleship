
import { Game } from './game';
import { GameFactoryService } from './game-factory.service';
import {FieldValue, IField, IGame} from './game.interface';

export class Field implements IField {

    currentGame: IGame | undefined;
    readonly value: FieldValue;
    readonly actualValue: FieldValue;

    shoot(): IGame {

        let newGrid: Field[][] = [];
        let xSize = this.currentGame!.field   .length;
        let ySize = this.currentGame!.field[0].length;

        for (let y = 0; y < xSize; y++) {
          for (let x = 0; x < ySize; x++) {

            const element: Field = this.currentGame!.field[x][y];


            let value: FieldValue = element.value;
            let actualValue: FieldValue = element.actualValue;
            let currGame = element.currentGame;

            if(element === this) {
              
              if(actualValue == FieldValue.SHIP_PART) {
                console.log("hit");
                value = actualValue = FieldValue.PART_OF_DESTROYED_SHIP;
              } else {
                console.log("miss");
                value = actualValue;
              }

            }


            let newField = new Field(actualValue, value);


            const column = newGrid[x] = newGrid[x] || [];
            column[y] = newField;

          }
        }
        let newGame: IGame = new Game(newGrid, GameFactoryService.checkWin(newGrid, true));
        GameFactoryService.assignGame(newGame, newGrid);
        return newGame!;
    }

    constructor(actualValue: FieldValue, value: FieldValue) {
      this.actualValue = actualValue;
      this.value = value;
    }

}

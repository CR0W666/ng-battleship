import {Injectable} from '@angular/core';
import {FieldValue, IField, IGame} from './game.interface';
import {Game} from './game';
import { Field } from './field';

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {

  generate(): IGame {
    return this.createGame(this.createField(), false);
  }


  createField() {
      let field: IField[][] = [ [new Field(0), new Field(1), new Field(0)], [new Field(0),new Field(0),new Field(0)], [new Field(1),new Field(0),new Field(0)] ]
      return field;
    }

  createGame(field: IField[][], winState: boolean) {
    let game = new Game(field, winState);
    return game;
  }
}



import {FieldValue, IField, IGame} from './game.interface';

export class Game implements IGame {
    field: IField[][];
    didWin: boolean;

    constructor(field: IField[][], didWin: boolean) {
      this.field = field;
      this.didWin = didWin;
    }

  }

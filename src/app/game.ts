import {FieldValue, IField, IGame} from './game.interface';

export class Game implements IGame {
    grid: IField[][];
    didWin: boolean;
      
    constructor(grid: IField[][], didWin: boolean) {
      this.grid = grid;
      this.didWin = didWin;
    }
    

  }
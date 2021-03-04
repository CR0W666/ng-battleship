import {FieldValue, IField, IGame} from './game.interface';

export class Field implements IField {

    value: FieldValue;
    shoot(): IGame {
        throw new Error('Method not implemented.');
    }

    constructor(value: FieldValue) {
        this.value = value;
    }

}
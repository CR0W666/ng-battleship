export enum FieldValue {
  WATER, SHIP_PART, PART_OF_DESTROYED_SHIP, UNKNOWN
}

export interface IField {
  readonly value: FieldValue;

  /**
   * @return changed instance of game with new state
   */
  shoot(): IGame;
}

/**
 * immutable state of the game
 */
export interface IGame {
  readonly field: IField[][];
  readonly didWin: boolean;
}

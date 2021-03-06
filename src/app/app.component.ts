import {Component} from '@angular/core';
import {GameFactoryService} from './game-factory.service';
import {FieldValue, IField, IGame} from './game.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-battleship';

  game: IGame;

  readonly unknownValue = FieldValue.UNKNOWN;
  readonly partValue = FieldValue.SHIP_PART;
  readonly waterValue = FieldValue.WATER;
  readonly partOfDestroyedShipValue = FieldValue.PART_OF_DESTROYED_SHIP;

  constructor(
    private readonly gameFactory: GameFactoryService
  ) {
    this.game = this.gameFactory.generate();
  }

  shoot(field: IField): void {
    this.game = field.shoot();
  }

  restart(): void {
    this.game = this.gameFactory.generate();
  }
}

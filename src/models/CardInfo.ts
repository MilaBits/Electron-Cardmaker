import { Phase } from './Phase';
import { RollType } from './RollType';
import { Role } from './Role';
import { CriticalEffectType } from './CriticalEffectType';
import { CardField } from './CardField';
import { Coordinate } from './Coordinate';

export class CardInfo {

    name: CardField = new CardField(new Coordinate(50, 0), 'name', null);
    summary: CardField = new CardField(new Coordinate(0, 0), 'summary', null);
    description: CardField = new CardField(new Coordinate(0, 0), 'description', null);

    phase: CardField = new CardField(new Coordinate(0, 0), 'test', null);

    rollTarget: CardField = new CardField(new Coordinate(0, 0), 'test', null);
    rollType: CardField = new CardField(new Coordinate(0, 0), 'test', null);
    rollText: CardField = new CardField(new Coordinate(0, 0), 'test', null);

    criticalType: CardField = new CardField(new Coordinate(0, 0), 'test', null);
    firstEffect: CardField = new CardField(new Coordinate(0, 0), 'test', null);
    secondEffect: CardField = new CardField(new Coordinate(0, 0), 'test', null);

    mainRole: CardField = new CardField(new Coordinate(0, 0), 'test', null);
    secondaryRoles: CardField = new CardField(new Coordinate(0, 0), 'test', null);
    pointCost: CardField = new CardField(new Coordinate(0, 0), 'test', null);

    background: ImageBitmap;
}

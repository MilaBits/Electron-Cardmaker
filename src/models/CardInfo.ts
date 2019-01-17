import { Phase } from './Phase';
import { RollType } from './RollType';
import { Role } from './Role';
import { CriticalEffectType } from './CriticalEffectType';
import { CardField } from './CardField';

export class CardInfo {

    name: string;
    summary: string;
    description: string;

    phase: Phase;

    rollTarget: string;
    rollType: RollType;
    rollText: string;

    criticalType: CriticalEffectType;
    firstEffect: string;
    secondEffect: string;

    mainRole: Role;
    secondaryRoles: Role[];
    pointCost: number;

    background: ImageBitmap;

    cardFields: CardField[];
}

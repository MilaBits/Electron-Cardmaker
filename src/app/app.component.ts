import { Component } from '@angular/core';
import { Role } from 'src/models/Role';
import { CriticalEffectType } from 'src/models/CriticalEffectType';
import { RollType } from 'src/models/RollType';
import { Phase } from 'src/models/Phase';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'card-maker';

  roleList: Role[] = [
    { id: -1, name: 'Pilot' },
    { id: -1, name: 'Gunner' },
    { id: -1, name: 'Captain' },
    { id: -1, name: 'Mage' },
    { id: -1, name: 'ScienceOfficer' },
    { id: -1, name: 'Engineer' }];

  criticalEffectTypeList: CriticalEffectType[] = [
    { id: 0, name: 'D6' },
    { id: 0, name: 'Positive' },
    { id: 0, name: 'Negative' },
    { id: 0, name: 'Both' }
  ];
  rollTypeList: RollType[] = [
    { id: 0, name: 'Skill Check' },
    { id: 0, name: 'Push Roll' },
    { id: 0, name: 'Boost' },
  ];
  phaseList: Phase[] = [
    { id: 0, name: 'Movement Phase' },
    { id: 0, name: 'Attack Phase' },
    { id: 0, name: 'Any Phase' },
    { id: 0, name: 'Any Friendly Phase' }
  ];

}

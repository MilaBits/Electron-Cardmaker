import { Component, OnInit } from '@angular/core';
import { Role } from 'src/models/Role';
import { CriticalEffectType } from 'src/models/CriticalEffectType';
import { RollType } from 'src/models/RollType';
import { Phase } from 'src/models/Phase';

import * as interact from 'interactjs';
import { CardInfo } from 'src/models/CardInfo';
import { CardField } from 'src/models/CardField';
import 'fabric';
declare const fabric: any;

const CANVAS_WIDTH = 370;
const CANVAS_HEIGHT = 500;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  CANVAS_WIDTH = 370;
  CANVAS_HEIGHT = 500;

  canvas: any;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 6;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  sliderValue = 0;
  vertical = false;

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

  cardInfo: CardInfo = new CardInfo();

  ngOnInit(): void {
    this.cardInfo.phase.value = this.phaseList[0];

    this.canvas = new fabric.Canvas('canvas');
    this.canvas.preserveObjectStacking = true;
    this.canvas.selection = true;
    this.canvas.selectionColor = 'rgba(233, 30, 99,0.3)';
    this.canvas.selectionBorderColor = '#E91E63';
    this.canvas.selectionLineWidth = 1;
    this.canvas.perPixelTargetFind = true;

    this.drawStatics(this.canvas);
  }

  drawStatics(canvas: any) {
    fabric.Image.fromURL('../assets/resources/CardFrame.png', function (img) {
      canvas.add(img);
      img.scaleToHeight(CANVAS_HEIGHT);
      img.scaleToWidth(CANVAS_WIDTH);

      img.hoverCursor = 'default';
      img.lockMovementX = true;
      img.lockMovementY = true;
      img.lockRotation = true;
      img.hasBorder = false;
      img.hasControls = false;
      img.selectable = false;
    });

    fabric.Image.fromURL('../assets/resources/TitleBar.png', function (img) {
      canvas.add(img);
      img.scaleToHeight(CANVAS_HEIGHT);
      img.scaleToWidth(CANVAS_WIDTH);

      img.hoverCursor = 'default';
      img.lockMovementX = true;
      img.lockMovementY = true;
      img.lockRotation = true;
      img.hasBorder = false;
      img.hasControls = false;
      img.selectable = false;
    });

    fabric.Image.fromURL('../assets/resources/RollBar.png', function (img) {
      canvas.add(img);
      img.scaleToHeight(CANVAS_HEIGHT);
      img.scaleToWidth(CANVAS_WIDTH);

      img.hoverCursor = 'default';
      img.lockMovementX = true;
      img.lockMovementY = true;
      img.lockRotation = true;
      img.hasBorder = false;
      img.hasControls = false;
      img.selectable = false;
    });
  }

  updateCanvas() {
    this.canvas.clear();
    this.drawStatics(this.canvas);

    for (const key in this.cardInfo) {
      if (this.cardInfo.hasOwnProperty(key)) {

        const visual = this.cardInfo[key].getVisualObject();
        this.canvas.add(visual);
        this.canvas.bringToFront(visual);
      }
    }
  }
}

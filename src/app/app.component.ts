import { Component } from '@angular/core';

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

}

import { Coordinate } from './Coordinate';
import { isNullOrUndefined } from 'util';
import 'fabric';
declare const fabric: any;

export class CardField {

    value: any;
    image: ImageBitmap;

    position: Coordinate;
    visualObject: any;

    constructor(position: Coordinate, value?: any, image?: any) {
        this.value = value;
        this.image = image;
        this.position = position;
    }

    getVisualObject(): any {
        if (isNullOrUndefined(this.value) === false) {
            console.log('this happened');
            return new fabric.Text(this.value, this.position).set({
                borderColor: '#E91E63',
                cornerColor: '#E91E63',
                transparentCorners: false,
                cornerStrokeColor: '#E91E63',
                cornerStyle: 'circle',
                borderDashArray: [10, 5],
                cornerSize: 10,
                padding: 8,
            });
        }
    }
}

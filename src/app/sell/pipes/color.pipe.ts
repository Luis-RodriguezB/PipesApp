import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sells.interfaces';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return "Rojo";
      case 1:
        return "Negro";
      case 2:
        return "Azúl";
      case 3:
        return "Verde";
      default:
        return "";
    }
  }
}

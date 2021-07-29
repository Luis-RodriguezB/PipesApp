import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flight',
})
export class Flight implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'vuela' : 'no vuela';
  }
}

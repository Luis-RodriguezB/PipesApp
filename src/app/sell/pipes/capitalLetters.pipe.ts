import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetter',
})
export class CapitalLetterPipe implements PipeTransform {
  transform(value: string, isCapitalLetter = true): string {
    return isCapitalLetter ? value.toUpperCase() : value.toLowerCase();
  }
}

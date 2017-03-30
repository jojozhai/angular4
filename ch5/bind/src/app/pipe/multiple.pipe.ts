import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, multiple?: number): number {

    return value * (isNaN(multiple)?1:multiple);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minOrderQuantity'
})
export class MinOrderQuantityPipe implements PipeTransform {

  transform(value: any, args: number): any {
    if (args === -1 || args === null) {
      return value;
    } else {
      return value.filter(ele => parseInt(ele.minOrderQuantity, 10) > args);
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, min: number, max: number): any {
    if (min === null || max === null) {
      return value;
    } else {
      return value.filter(ele => {
        return (((parseFloat(ele.priceFrom) >= min) && (parseFloat(ele.priceTo) <= max)));
      });
    }
  }

}

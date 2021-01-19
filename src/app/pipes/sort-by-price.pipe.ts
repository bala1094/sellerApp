import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByLowPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(value: any, args: string): any {
    // args:  false - high to low
    // true: low to high
  if (args === 'sortLowToHigh') {
      value.sort((a, b) => {
        return a.priceFrom - b.priceFrom;
      });
    } else if (args === 'sortHighToLow') { // sorting high to low
      value.sort((a, b) => {
        return b.priceTo - a.priceTo;
      });
    } else {
      return value;
    }
    return value;
  }

}

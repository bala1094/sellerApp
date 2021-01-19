import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    const filterArrayLength = args.length;
    if (filterArrayLength > 0) {
      return value.filter(element =>  args[0] === element.supplierCountry);
    } else {
      return value;
    }
  }

}

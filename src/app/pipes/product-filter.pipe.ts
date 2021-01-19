import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  resultArray = [];
  tempArray = [];
  transform(value: any, args: string[]): any {
    const filterArrayLength = args.length;

    if (filterArrayLength > 0) {
      this.resultArray = [];
      this.tempArray = [];
      args.forEach((element, index ) => {
        this.tempArray = value.filter( ele => ele[element] === true);
        this.tempArray.forEach( ele => this.resultArray.push(ele));
      });

      const obj = {};

      for ( let i = 0, len = this.resultArray.length; i < len; i++ ) {
        const temp = this.resultArray[i]['productTitle'];
            obj[temp] = this.resultArray[i];
      }

      this.resultArray = new Array();
      for ( const key in obj ) {
        if (obj.hasOwnProperty(key)) {
          this.resultArray.push(obj[key]);
        }
      }
      console.log('this.resultArray');
      console.log(this.resultArray);
      return this.resultArray;
    } else {
      return value;
    }
  }

}

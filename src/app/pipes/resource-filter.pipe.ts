import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resourceFilter'
})

export class ResourceFilterPipe implements PipeTransform {

  resultArray = [];
  transform(value: any, filterElement?: any): any {
    this.resultArray = [];
    this.resultArray = value.filter(ele => ele.resource_type === filterElement);
      return this.resultArray;
    }
}

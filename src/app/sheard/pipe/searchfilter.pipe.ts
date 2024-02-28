import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(search: any, args: any): unknown {
    console.log(search)
    return null;
  }

}

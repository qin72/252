import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipePipe implements PipeTransform {

  transform(a: Array<any>, b:string): Array<any> {
    a.sort((l:any, r:any) => {
      if(l[b] < r[b]) { return -1; }
      if(l[b] > r[b]) { return 1; }
      return 0;
    })
    return a;
  }

}

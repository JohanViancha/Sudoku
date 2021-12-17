import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'for'
})
export class ForPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if(typeof value === 'number'){
        return [...Array(value).keys()];
    }
  }

}

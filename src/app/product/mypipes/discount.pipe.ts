import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,rate:number): number {
    let discount:number
    discount=value*(rate/100)
    return value - discount;
  }

}

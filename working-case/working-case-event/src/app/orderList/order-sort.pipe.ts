import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order';

@Pipe({
  name: 'ordersort'
})
export class OrderSortPipe implements PipeTransform {

  transform(values: number[]|string[]|object[], order?: string, reverse?: boolean) {
    if (!Array.isArray(values) || values.length <= 0) {
      return null;
    }

    return this.sort(values, order, reverse);
  }

  private sort(value: any[], order?: any, reverse?: boolean): any[] {
    const isInside = order && order.indexOf('.') !== -1;

    if (isInside) {
      order = order.split('.');
    }

    const array: any[] = value.sort((a: any, b: any): number => {
      if (!order) {
        return a > b ? 1 : -1;
      }

      if (!isInside) {
        return a[order] > b[order] ? 1 : -1;
      }

      return this.getValue(a, order) > this.getValue(b, order) ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }

  private getValue(object: any, order: string[]) {
    for (let i = 0, n = order.length; i < n; ++i) {
      const k = order[i];
      if (!(k in object)) {
        return;
      }

      object = object[k];
    }

    return object;
  }

}

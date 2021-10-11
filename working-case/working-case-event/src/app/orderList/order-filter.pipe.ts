import { Pipe, PipeTransform } from '@angular/core';
import {Order} from './order'

export type SortOrder = 'asc' | 'desc'

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(value: Order[], filterText?:string): Order[] {
    filterText = filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter((o:Order)=>o.Order.toLocaleLowerCase().indexOf(filterText)!==-1 
    || o.Model.toLocaleLowerCase().indexOf(filterText)!==-1
  
    || o.Country.toLocaleLowerCase().indexOf(filterText)!==-1
  
    ):value
  }
  


}

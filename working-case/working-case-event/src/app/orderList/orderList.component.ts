import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from '../services/order.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-orderList',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css'],
  providers:[OrderService]
})
export class OrderListComponent implements OnInit {

  constructor(private orderService:OrderService, private http:HttpClient) { }

  filterText = ""
  
  order: Order[]=[]
  model : Order = new Order()
  

  ngOnInit() {
    // list 
    this.orderService.getOrder().subscribe(data=>{
      this.order=data
    })
  }

  
  // remove
  removeOrder(id: any){
    this.orderService.removeOrder(id)
    window.location.reload()   
  }
  
 // edit
 editOrder(form:NgForm){
  this.orderService.editOrder(this.model).subscribe(data=>{})  
 console.log(Order)
}



}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../orderList/order';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css'],
  providers:[OrderService]
})
export class OrderAddComponent implements OnInit {

  
  constructor(private service:OrderService, private orderService:OrderService, private http:HttpClient) { } 
  model : Order = new Order()
  orders : Order[] = []
  title = "Add"

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(data=>{
      this.orders = data
    })
  }

  // Add
  addOrder(form:NgForm){
    this.orderService.add(this.model).subscribe(data=>{

      window.location.href='/'
    })
    
  
  }

  
}

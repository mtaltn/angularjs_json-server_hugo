import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from '../services/order.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { OrderSortPipe } from './order-sort.pipe';
import { BtnCellRendererComponent } from './BtnCellRenderer/BtnCellRenderer.component';
import { BtnCellRenderer2Component } from './BtnCellRenderer2/BtnCellRenderer2.component';




@Component({
  selector: 'app-orderList',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css'],
  providers:[OrderService]
  
})


export class OrderListComponent implements OnInit {

  constructor(private orderService:OrderService, private http:HttpClient) { }
  columnDefs = [
    { field: 'id', sortable: true,filter:true ,width:90 },
    { field: 'Order', sortable: true ,filter:true, width:370},
    { field: 'Model', sortable: true ,filter:true, width:100},
    { field: 'Date', sortable: true ,filter:true, width:100},
    { field: 'Country', sortable: true ,filter:true, width:150},
    { field: 'Status', sortable: true ,filter:true, width:90},
    { 
      field: 'Güncelle',width:130, 
      cellRenderer: 'btnCellRenderer', 
      cellRendererParams: {
        clicked: function(f:any) {
          console.log(f);
          window.location.href="/orderEdit/"+f
        }
      },
      minWidth:50
    },
    { 
      field: 'Sil',width:90, 
      cellRenderer: 'btnCellRenderer2', 
      cellRendererParams: {
        clicked:(f:any)=> this.removeOrder(f)
      },
      minWidth:50
    }
  ];

  frameworkComponents={
    btnCellRenderer: BtnCellRendererComponent,
    btnCellRenderer2:BtnCellRenderer2Component
  };

 
  filterText = ""
  
  rowData: Order[]=[]
  model : Order = new Order()  

  ngOnInit() {
    // list 
    this.orderService.getOrder().subscribe(data=>{
      this.rowData=data
    })


  }
  // remove
  removeOrder(id:any):void {
    this.orderService.removeOrder(id)
    alert("silme tamamlandı.")
    window.location.reload()   
  }
/*
  getOrderDateService(id:any){
    this.orderService.getOrderById(id).subscribe(data=>{
      
      console.log(id)
    })
  }

  
  
  
 // edit
 editOrder(form:NgForm){
  this.orderService.editOrder(this.model).subscribe(data=>{})  
 console.log(Order)
}

*/



}

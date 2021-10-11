import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orderList/orderList.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderFilterPipe } from './orderList/order-filter.pipe';
import { OrderSortPipe } from './orderList/order-sort.pipe';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnCellRendererComponent } from './orderList/BtnCellRenderer/BtnCellRenderer.component';
import { BtnCellRenderer2Component } from './orderList/BtnCellRenderer2/BtnCellRenderer2.component';


@NgModule({
  declarations: [					
    AppComponent,
      OrderListComponent,
      NavbarComponent,
      OrderFilterPipe,
      OrderSortPipe,
      OrderAddComponent,
      OrderEditComponent,
      BtnCellRendererComponent,
      BtnCellRenderer2Component
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

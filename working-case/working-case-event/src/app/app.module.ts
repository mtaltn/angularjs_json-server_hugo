import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orderList/orderList.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderFilterPipe } from './orderList/order-filter.pipe';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';


@NgModule({
  declarations: [				
    AppComponent,
      OrderListComponent,
      NavbarComponent,
      OrderFilterPipe,
      OrderAddComponent,
      OrderEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

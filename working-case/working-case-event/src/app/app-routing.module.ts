import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import {OrderListComponent} from './orderList/orderList.component'

const routes: Routes = [
  {path:'order',component:OrderListComponent},
  {path:'',redirectTo:'order',pathMatch:'full'},
  {path:'orderAdd',component:OrderAddComponent},
  {path:'orderEdit/:id',component:OrderEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

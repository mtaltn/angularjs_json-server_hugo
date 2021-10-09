import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Order } from '../orderList/order';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/order"


  getOrder():Observable<Order[]> {
    return this.http.get<Order[]>(this.path)
  }

  getOrderById(id:any):Observable<Order>{
    
    return this.http.get<Order>(this.path+"/"+id)


  }
  

  add(order: Order):Observable<Order>{
    const httpoption={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Order>(this.path,order,httpoption)
  }

  removeOrder(id:any){ 
    let newPath = this.path +"/" + id 
   this.http.delete(newPath).subscribe()        
  }
 

  editOrder(order: Order):Observable<Order>{
    let newPath = this.path + "/" + order.id
    const httpoption={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.put<Order>(newPath,order,httpoption)
  }



 

 




}

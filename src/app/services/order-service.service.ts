import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable, Subject } from 'rxjs';


//Service to communicate between interface and basket
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private newItem = new Subject<any>();
  private deleteItem = new Subject<any>();
  private updatePrice = new Subject<any>();


  /*    ADD AN ITEM TO BASKET     */
  //Item added from card product to sidebar
  addItemToBasket(id: number){
    this.newItem.next(id);
  }

  //Item received by sidebar
  getItemFromInterface(){
    return this.newItem.asObservable();
  }


  /*   DELETE AN ITEM FROM SIDEBAR ITEM     */
  handleDeleteItem(id: number){
    this.deleteItem.next(id);
  }

  getDeleteRequest(){
    return this.deleteItem.asObservable();
  }


  /*  UPDATE THE PRICE    */
  handleUpdatePrice(amount:number){
    this.updatePrice.next(amount);
  }
  obsUpdatePrice(){
    return this.updatePrice.asObservable();
  }
}

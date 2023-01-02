import { Component } from '@angular/core';
import  menuJSON  from '../../../models/menu.json';
import { Menu } from '../../../models/Menu'
import { OrderServiceService } from 'src/app/services/order-service.service';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  basket: {menu: Menu, quantity: number}[] = [];
  totalPrice: number = 0;

  addItemSubscription!:Subscription;
  deleteItemSubscription!:Subscription;
  updatePriceSubscription!: Subscription;
  constructor(private orderService: OrderServiceService){
    this.addItemSubscription = this.orderService.getItemFromInterface().subscribe((id) => {
      this.addItem(id);
    })

    this.deleteItemSubscription = this.orderService.getDeleteRequest().subscribe((id) => {
      this.deleteItem(id);
    })

    this.updatePriceSubscription = this.orderService.obsUpdatePrice().subscribe((amount) => {
      this.updateTotalPrice(amount);
    })
  }



  ngOnInit(){
    
  }

  //Add an item to basket
  addItem(id: number){
    const menu = menuJSON.find(item => item.id === id);
    if(!menu) return console.log("Erreur, menu introuvable");

    console.log(menu)
    //If already ordered, increment the quantity
    const alreadyOrdered = this.basket.find(item => item.menu.id === id);
    if(alreadyOrdered){
      alreadyOrdered.quantity += 1;
      this.updateTotalPrice(alreadyOrdered.menu.price);
      console.log(this.basket)
      return;
    }

    //Else add to the basket
    this.updateTotalPrice(menu.price);
    this.basket.push({menu: menu, quantity: 1});
    console.log(this.basket)
  }

  //Delete an item in the basket
  deleteItem(id: number){
    const itemDeleted = this.basket.find(item => item.menu.id === id);
    if(itemDeleted) this.updateTotalPrice(-itemDeleted.menu.price);

    let newBasket = this.basket.filter( item => item.menu.id !== id);
    this.basket = [...newBasket];
  }

  //get the full market list
  getMarketList(): Menu[] | null{
    return menuJSON;
  } 

  //Update the total price
  updateTotalPrice(amount: number){
    this.totalPrice += amount;
  }
}

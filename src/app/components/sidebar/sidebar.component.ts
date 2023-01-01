import { Component } from '@angular/core';
import  menuJSON  from '../../../models/menu.json';
import { Menu } from '../../../models/Menu'
import { OrderServiceService } from 'src/app/services/order-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  basket: {menu: Menu, quantity: number}[] = [];

  addEventSubscription!:Subscription;
  constructor(private orderService: OrderServiceService){
    this.addEventSubscription = this.orderService.getItemFromInterface().subscribe((id) => {
      this.addItem(id);
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
      console.log(this.basket)
      return;
    }

    //Else add to the basket
    this.basket.push({menu: menu, quantity: 1});
    console.log(this.basket)
  }

  //get the full market list
  getMarketList(): Menu[] | null{
    return menuJSON;
  } 
}

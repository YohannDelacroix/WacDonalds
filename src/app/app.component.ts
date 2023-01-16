import { Component } from '@angular/core';
import  menuJSON  from '../models/menu.json';
import { Menu } from '../models/Menu'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wacdonalds';
  menu: Menu[] = menuJSON;
  paying: boolean = true;
  totalPrice!: number;

  ngOnInit(){

  }

  

  //Get the list of menu
  getMenu(): Menu[] | null{
    return this.menu.filter(item => item.cat === "menu");
  }

  //Get the list of products
  getProduct(): Menu[] | null{
    return this.menu.filter(item => item.cat === "product")
  }

  //When the done button is clicked on the sidebar
  paymentRequest(price: number){
    console.log("Requesting payment of ", price);
    this.paying = true;
    this.totalPrice = price;
  }

  //When the cancel button is pressed on the payment interface
  cancelRequest(){
    this.paying = false;
  }
}

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
}

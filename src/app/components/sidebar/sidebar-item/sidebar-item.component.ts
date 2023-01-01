import { Component, Input } from '@angular/core';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() item!: {menu: Menu, quantity: number};
  urlImage!: string;

  ngOnInit(): void{
    this.urlImage = "../../../../assets/icons/" + this.item.menu.icon;
  }

  incrementQuantity(){
    this.item.quantity+=1;
  }

  decrementQuantity(){
    this.item.quantity-=1;
    if(this.item.quantity <= 0){
      //Supprimer
    }
  }
}

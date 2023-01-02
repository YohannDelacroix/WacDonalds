import { Component, Input } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { Menu } from 'src/models/Menu';


@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() item!: {menu: Menu, quantity: number};
  urlImage!: string;

  constructor(private orderService: OrderServiceService){}

  ngOnInit(): void{
    this.urlImage = "../../../../assets/icons/" + this.item.menu.icon;
  }

  incrementQuantity(){
    this.item.quantity+=1;
    this.orderService.handleUpdatePrice(this.item.menu.price);
  }

  decrementQuantity(){
    this.item.quantity-=1;
    if(this.item.quantity <= 0){
      this.orderService.handleDeleteItem(this.item.menu.id);
    }
    else{
      this.orderService.handleUpdatePrice(-this.item.menu.price);
    }
  }
}

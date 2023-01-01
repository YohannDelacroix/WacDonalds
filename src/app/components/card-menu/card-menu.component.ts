import { Component, Input } from '@angular/core';
import { Menu } from '../../../models/Menu'
import { OrderServiceService } from '../../services/order-service.service';


@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent {
  @Input() item!: Menu;
  urlImage!: string;

  constructor(private orderService: OrderServiceService){}

  addItem(){
    this.orderService.addItemToBasket(this.item.id);
  }

  ngOnInit(): void{
    this.urlImage = "../../../assets/icons/" + this.item.icon;
  }
}

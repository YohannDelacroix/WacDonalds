import { Component, Input } from '@angular/core';
import { Menu } from '../../../models/Menu'
import { OrderServiceService } from '../../services/order-service.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() item!: Menu;
  urlImage!: string;

  constructor(private orderService: OrderServiceService){}

  //add an item into the basket
  addItem(){
    this.orderService.addItemToBasket(this.item.id);
  }

  ngOnInit(): void{
    this.urlImage = "../../../assets/icons/" + this.item.icon;
  }
}

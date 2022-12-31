import { Component, Input } from '@angular/core';
import { Menu } from '../../../models/Menu'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() item!: Menu;
  urlImage!: string;

  ngOnInit(): void{
    this.urlImage = "../../../assets/icons/" + this.item.icon;
  }
}

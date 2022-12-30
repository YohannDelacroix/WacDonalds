import { Component, Input } from '@angular/core';
import { Menu } from '../../../models/Menu'



@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent {

  @Input() item!: Menu;
  urlImage!: string;

  ngOnInit(): void{
    this.urlImage = "../../../assets/icons/" + this.item.icon;
  }
}

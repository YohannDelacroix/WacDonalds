import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  credit!: string;
  cvc!: string;
  expDate!: string;
  holderName!: string;
  month: string = "";
  year: number = 0;
  @Input() total!: number;
  @Output() cancel = new EventEmitter();

  months: string[] = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  years: number[] = []; 

  constructor(private orderService: OrderServiceService){}

  ngOnInit(){
    console.log(new Date().getFullYear())
    for(let i = new Date().getFullYear() - 1; i < new Date().getFullYear() + 20; i++){
      this.years.push(i);
    }


    let executeTime = 2000 / this.total;
    let finalTotal = this.total;
    this.total = 0;

    for(let i = 0; i < finalTotal*100; i++){
      setTimeout( () => {
        this.total += 0.01;
      }, executeTime);
    }
  }

  handleCancel(){
    this.cancel.emit();
  }

  handlePay(){
    this.orderService.clearBasket();
    this.cancel.emit();
  }



}

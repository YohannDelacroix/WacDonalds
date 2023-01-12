import { Component } from '@angular/core';

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

  months: number[] = Array.from(Array(12+1).keys());
  years: number[] = []; 

  ngOnInit(){
    console.log(new Date().getFullYear())
    for(let i = new Date().getFullYear() - 1; i < new Date().getFullYear() + 20; i++){
      this.years.push(i);
    }
  }
}

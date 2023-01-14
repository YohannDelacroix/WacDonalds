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
  total!: number;

  months: number[] = Array.from(Array(12+1).keys());
  years: number[] = []; 

  ngOnInit(){
    console.log(new Date().getFullYear())
    for(let i = new Date().getFullYear() - 1; i < new Date().getFullYear() + 20; i++){
      this.years.push(i);
    }

    this.total = 86.50;


    let executeTime = 2000 / this.total;
    let finalTotal = this.total;
    this.total = 0;

    for(let i = 0; i < finalTotal*100; i++){
      setTimeout( () => {
        this.total += 0.01;
      }, executeTime);
    }
  }
}

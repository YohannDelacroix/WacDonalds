import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  credit!: string;
  spaces: number = 0;
  previousLength: number = 0;

  onChangeCreditCard(): void{
    console.log(this.credit)
    console.log("Previous lngth ", this.previousLength);

    //console.log(value.length, this.credit.length)

    if(this.previousLength < this.credit.length){
      console.log("Addd")
      //console.log("length : " , this.credit.length-this.spaces);
      if((this.credit.length-this.spaces)%4 == 0){
        if(this.credit.length-this.spaces < 16){
          this.credit = this.credit + ' ';
          this.spaces++;
        }
      } 
    }
    else{
      console.log("how to remove spaces ?");
    }

    

    this.previousLength = this.credit.length;

  }
}

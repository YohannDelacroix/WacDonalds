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
  expDate: string = "__/__";


  ngOnInit(){

  }

  onChangeCreditCard(): void{

    /*let lastChar = this.credit.slice(-1);
    console.log("Last char : ", lastChar)
    if(isNaN(parseInt(lastChar,10))){
      this.credit = this.credit.slice(0,-1);
      return;
    }*/

    if(this.previousLength < this.credit.length){  //Adding
      //console.log("length : " , this.credit.length-this.spaces);

      

      if((this.credit.length-this.spaces)%4 == 0){
        if(this.credit.length-this.spaces < 16){
          this.credit = this.credit + ' ';
          this.spaces++;
        }
      } 
    }
    else{
      //If the last character removed is a space, remove the last
      let realLength = this.credit.length - this.spaces +1;
      if(realLength%4 == 0 && realLength < 16){
          this.credit = this.credit.slice(0,-1);
          this.spaces--;
      }
    }
    this.previousLength = this.credit.length;
  }

  changeCreditCard(): void{
    console.log("ok")
    /*let lastChar = this.credit.slice(-1);
    console.log("Last char : ", lastChar)
    if(isNaN(parseInt(lastChar,10))){
      this.credit = this.credit.slice(0,-1);
      return;
    }*/

    if(this.previousLength < this.credit.length){  //Adding
      //console.log("length : " , this.credit.length-this.spaces);

      

      if((this.credit.length-this.spaces)%4 == 0){
        if(this.credit.length-this.spaces < 16){
          this.credit = this.credit + ' ';
          this.spaces++;
        }
      } 
    }
    else{
      //If the last character removed is a space, remove the last
      let realLength = this.credit.length - this.spaces +1;
      if(realLength%4 == 0 && realLength < 16){
          this.credit = this.credit.slice(0,-1);
          this.spaces--;
      }
    }
    this.previousLength = this.credit.length;
  }

  controlCreditInput(e: any){
    console.log("Keyup : ", e.key);
    if(isNaN(parseInt(e.key, 10))){
      
      this.credit = this.credit.slice(0,-1);
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private subject = new Subject<any>();

  addItemToBasket(id: number){
    this.subject.next(id);
  }

  getItemFromInterface(){
    return this.subject.asObservable();
  }
}

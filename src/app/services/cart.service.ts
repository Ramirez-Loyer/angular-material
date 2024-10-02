import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cart: any;
  listCart: any;
  addTraining(book: Book) {
    this.listCart.push(book)
  }

  removeFromCart(training : Book) {
    this.listCart.splice(this.listCart.indexOf(training), 1)
  }

  addBook() {

  }

  constructor() { }
}

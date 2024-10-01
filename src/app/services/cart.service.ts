import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any;
  addBook(book: Book) {
    this.cart.set(book.id,book);
    //this.saveCart(); //à chaque fois que j'ajoute un élément au panier, je met à jour le local storage
  }

  constructor() { }
}

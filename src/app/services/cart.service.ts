import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Book[] = []; 
 

  constructor() { }


    //Pour ajouter des nouveux livres dans la liste du cart
    addToCart(book: Book) : void {
      this.cart.push(book); //Ajoute le livre 
      console.log('${book.name} added to cart');
    }

     // Pour  récuperer les livres du cart
  getCartItems(): Book[] {
    return this.cart; // Retourne le array de livres 
  }

  // Méthode pour netoyyer le cart
  clearCart(): void {
    this.cart = [];
    console.log('Cart vide');
  }
}
          



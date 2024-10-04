import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Book[] = []; 
 

  constructor(private router: Router) {
    let myCart = localStorage.getItem("cart");
      if(myCart) {
        this.cart=JSON.parse(myCart);
      } 
   }

    //Pour ajouter des nouveux livres dans la liste du cart
    addToCart(book: Book) : void {
      this.cart.push(book); //Ajoute le livre 
      this.updateCart();
    }

     // Pour  récuperer les livres du cart
  getCartItems(): Book[] {
    return this.cart; // Retourne le array de livres 
  }

  // Méthode pour netoyyer le cart
  clearCart(): void {
    this.cart = [];
    this.updateCart();
  }

  updateCart(): void {
    localStorage.setItem("cart", JSON.stringify([...this.cart]));
    this.router.navigate([this.router.url]);
  }

}
          



import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 
  cartItems: Book[] = []; 
  totalItems: number = 0; 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  // Charger les livres
  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalItems = this.cartItems.length;
    console.log(this.cartItems);
  }

    // Ajouter un livre
    addToCart(book: Book): void {
      this.cartService.addToCart(book);
      this.loadCartItems(); // Actualiza
    }

  // Supprimer un livre du cart
  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
    this.loadCartItems();
  }

  // Método pour vider le cart
  clearCart(): void {
    this.cartService.clearCart();
    this.loadCartItems();
  }
}
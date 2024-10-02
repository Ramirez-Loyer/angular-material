import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  listBooks : Book[] | undefined;
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.listBooks = [
      {id:1, name: "Poulet", author: "Béru", description: "Science-fiction", price: 18, quantity:1 }, 
      {id:1, name: "Hypoténuse", author: "Hervé Bery", description: "Science-fiction", price: 20, quantity:1 }, 
      {id:1, name: "Equilibres", author: "Eric Magre", description: "Science-fiction", price: 23, quantity:1 }
    ]
  }

  onAddToCart(book:Book) {
   this.cartService.addBook();
   this.router.navigateByUrl('cart');
    }

  }



 /* displayBooks() {
    this.listBooks = [
      {id:1, name: "Poulet", author: "Béru", description: "Science-fiction", price: 18, quantity:1 }, 
      {id:1, name: "Hypoténuse", author: "Hervé Bery", description: "Science-fiction", price: 20, quantity:1 }, 
      {id:1, name: "Equilibres", author: "Eric Magre", description: "Science-fiction", price: 23, quantity:1 }
    ]
  }*/



//https://www.thebookedition.com/fr/1700-science-fiction
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/services/cart.service';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  listBooks : Book[] | undefined;
  error : any; 

  constructor(private cartService : CartService, private router : Router, private apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.listBooks = [
      {id:1, name: "Poulet", author: "Béru", description: "Science-fiction", price: 18, quantity:1 }, 
      {id:1, name: "Hypoténuse", author: "Hervé Bery", description: "Science-fiction", price: 20, quantity:1 }, 
      {id:1, name: "Equilibres", author: "Eric Magre", description: "Science-fiction", price: 23, quantity:1 }
    ]
  }

/**
   * Méthode qui renvoi à partir de l'Api toutes les books accessibles
   * en cas de problème avec l'api, un message d'erreur sera relayé et affiché
   */
getAllBooks() {
  this.apiService.getBooks().subscribe({
    next : (data) => this.listBooks = data, 
    error : (err) => this.error = err.message,
    complete : () => this.error = null
})
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
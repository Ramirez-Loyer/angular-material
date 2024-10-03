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
    this.getAllBooks();
  }

/**
   * Méthode qui renvoi à partir de l'Api toutes les books accessibles
   * en cas de problème avec l'api, un message d'erreur sera relayé et affiché
   */
getAllBooks() {
  this.apiService.getBooks().subscribe({
    next: (data) => this.listBooks = data,
    error: (err) => {
      console.error('Error al cargar libros:', err); 
      this.error = err.message;
    },
    complete: () => this.error = null
})
}

 // Méthode pour ajouer un livre au cart
 addToCart(book: Book): void {
  this.cartService.addToCart(book);
  console.log(`${book.name} ajouté au cart`); 
}


}






//https://www.thebookedition.com/fr/1700-science-fiction
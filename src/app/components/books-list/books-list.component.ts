import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  listBooks : Book[] | undefined;
  listCategory : Category | undefined;
  error = null;



  constructor(
    private router : Router, private apiService : ApiServiceService, cartService : CartService) { }

  ngOnInit(): void {
   
        this.getAllBooks();
     
  }
 



  getAllBooks() {
     this.apiService.getBooks().subscribe({
       next: (data) => (
         (this.listBooks = data)
       ),
       error: (err) => (this.error = err.message),
       complete: () => (this.error = null),
     });
  }

 
    


  onDeleteBook() {
    
    } 

/*
 // Méthode pour ajouer un livre au cart
 addToCart(book: Book): void {
  this.cartService.addToCart(book);
  console.log(`${book.name} ajouté au cart`); 
}
*/

displayedColumns: string[] = ['id', 'name', 'author', 'description', 'actions'];

}




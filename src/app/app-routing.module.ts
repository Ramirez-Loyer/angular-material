import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'navbar', component : NavbarComponent},
  {path : 'card', component : CardComponent},
  {path : 'books', component : BooksComponent}, 
  {path : 'cart', component : CartComponent},
  {path : '', redirectTo : 'books', pathMatch : 'full'},
  {path : '404', component : NotFoundComponent},
  {path : '**', redirectTo : '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

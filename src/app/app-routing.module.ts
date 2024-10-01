import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {
  path: 'navbar', component : NavbarComponent
  },
  {
  path : 'card', component : CardComponent
  },
  {
    path : 'books', component : BooksComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

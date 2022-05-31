import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ClientesListingComponent } from './clientes/clientes-listing/clientes-listing.component';
import { ClienteDetailsComponent } from './clientes/cliente-details/cliente-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },

  { path: 'books', component: BooksListingComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'clientes', component: ClientesListingComponent },
  { path: 'cliente-details/:id', component: ClienteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


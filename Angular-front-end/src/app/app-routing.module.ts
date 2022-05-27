import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },

  { path: 'books', component: BooksListingComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

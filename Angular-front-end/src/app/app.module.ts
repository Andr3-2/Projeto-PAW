import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientListingComponent } from './clients/client-listing/client-listing.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    /*BOOKS COMPONETS*/
    BooksListingComponent,
    BookDetailsComponent,
    BookAddComponent,
    BookEditComponent,
    /*BOOKS CLIENT*/
    ClientAddComponent,
    ClientListingComponent,
    ClientAddComponent,
    ClientDetailsComponent,
    ClientEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

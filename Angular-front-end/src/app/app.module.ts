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
import { ClientesListingComponent } from './clientes/clientes-listing/clientes-listing.component';
import { ClienteDetailsComponent } from './clientes/cliente-details/cliente-details.component';
import { EmployeesListingComponent } from './employees/employees-listing/employees-listing.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';

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

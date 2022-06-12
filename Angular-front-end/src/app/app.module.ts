import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksListingBComponent } from './books/books-listing-b/books-listing-b.component';

import { ClientesListingComponent } from './clientes/clientes-listing/clientes-listing.component';
import { ClienteDetailsComponent } from './clientes/cliente-details/cliente-details.component';
import { ClienteAddComponent } from './clientes/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

import { EmployeesListingComponent } from './employees/employees-listing/employees-listing.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';

import { TransactionsListingComponent } from './transactions/transactions-listing/transactions-listing.component';
import { TransactionAddComponent } from './transactions/transaction-add/transaction-add.component';
import { TransactionDetailsComponent } from './transactions/transaction-details/transaction-details.component';
import { TransactionEditComponent } from './transactions/transaction-edit/transaction-edit.component';

import { ShoppingCartComponent } from './common/shopping-cart/shopping-cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

import { ClientePageComponent } from './cliente-page/cliente-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

import { NotificationAddComponent } from './notifications/notification-add/notification-add.component';
import { NotificationsListingComponent } from './notifications/notifications-listing/notifications-listing.component';
import { NotificationDetailsComponent } from './notifications/notification-details/notification-details.component';
import { NotificationEditComponent } from './notifications/notification-edit/notification-edit.component';

import { ProposalsListingComponent } from './proposals/proposals-listing/proposals-listing.component';
import { ProposalAddComponent } from './proposals/proposal-add/proposal-add.component';
import { ProposalEditComponent } from './proposals/proposal-edit/proposal-edit.component';
import { ProposalDetailsComponent } from './proposals/proposal-details/proposal-details.component';
import { BookDetailsBComponent } from './books/book-details-b/book-details-b.component';

@NgModule({
  declarations: [
    AppComponent,

    /*BOOKS COMPONETS*/
    BooksListingComponent,
    BookDetailsComponent,
    BookAddComponent,
    BookEditComponent,
    BooksListingBComponent,

    /*CLIENTES COMPONETS*/
    ClientesListingComponent,
    ClienteDetailsComponent,
    ClienteAddComponent,
    ClienteEditComponent,

    /*EMPLOYEES COMPONETS*/
    EmployeesListingComponent,
    EmployeeDetailsComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,

    /*TRANSACTIONS COMPONETS*/
    TransactionsListingComponent,
    TransactionAddComponent,
    TransactionDetailsComponent,
    TransactionEditComponent,
    /*Stuff*/
    ShoppingCartComponent,
    MainPageComponent,
    PaymentPageComponent,
    
    LoginComponent,
    RegisterComponent,
    ClientePageComponent,
    EmployeePageComponent,
    NotificationAddComponent,
    NotificationsListingComponent,
    NotificationDetailsComponent,
    NotificationEditComponent,
    ProposalsListingComponent,
    ProposalAddComponent,
    ProposalEditComponent,
    ProposalDetailsComponent,
    BookDetailsBComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent],
})


export class AppModule {}

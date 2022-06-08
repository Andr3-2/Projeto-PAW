import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';

import { ClientesListingComponent } from './clientes/clientes-listing/clientes-listing.component';
import { ClienteDetailsComponent } from './clientes/cliente-details/cliente-details.component';
import { ClienteAddComponent } from './clientes/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

import { EmployeesListingComponent } from './employees/employees-listing/employees-listing.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';

import { TransactionsListingComponent } from './transactions/transactions-listing/transactions-listing.component';
import { TransactionDetailsComponent } from './transactions/transaction-details/transaction-details.component';
import { TransactionAddComponent } from './transactions/transaction-add/transaction-add.component';
import { TransactionEditComponent } from './transactions/transaction-edit/transaction-edit.component';

import { MainPageComponent } from './main-page/main-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },

  { path: 'main', component: MainPageComponent },
  { path: 'payment/:cart', component: PaymentPageComponent },

  { path: 'books', component: BooksListingComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-edit/:id', component: BookEditComponent },

  { path: 'clientes', component: ClientesListingComponent },
  { path: 'cliente-details/:id', component: ClienteDetailsComponent },
  { path: 'cliente-add', component: ClienteAddComponent },
  { path: 'cliente-edit/:id', component: ClienteEditComponent },

  { path: 'employees', component: EmployeesListingComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },

  { path: 'transactions', component: TransactionsListingComponent },
  { path: 'transaction-details/:id', component: TransactionDetailsComponent },
  { path: 'transaction-add', component: TransactionAddComponent },
  { path: 'transaction-edit/:id', component: TransactionEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

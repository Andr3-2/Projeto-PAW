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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authGuard.guard';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './roleGuard.guard';

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


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },

  { path: 'main', component: MainPageComponent },
  { path: 'payment/:cart', component: PaymentPageComponent },
  { path: 'book-details-b/:id', component: BookDetailsBComponent},
  { path: 'cliente-page', component: ClientePageComponent ,canActivate: [AuthGuard] },
  { path: 'employee-page', component: EmployeePageComponent,canActivate: [AuthGuard,RoleGuard] },
  { path: 'proposals', component: ProposalsListingComponent, canActivate: [AuthGuard]},
  { path: 'proposal-add', component: ProposalAddComponent , canActivate: [AuthGuard]},
  { path: 'employee-edit/:id', component: EmployeeEditComponent, canActivate: [AuthGuard] },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //Admin Access
  { path: 'books', component: BooksListingComponent, canActivate: [AuthGuard,RoleGuard]},
  { path: 'book-details/:id', component: BookDetailsComponent, canActivate: [AuthGuard,RoleGuard] },
  { path: 'book-add', component: BookAddComponent , canActivate: [AuthGuard,RoleGuard,RoleGuard]},
  { path: 'book-edit/:id', component: BookEditComponent , canActivate: [AuthGuard]},

  { path: 'clientes', component: ClientesListingComponent , canActivate: [AuthGuard,RoleGuard]},
  { path: 'cliente-details/:id', component: ClienteDetailsComponent , canActivate: [AuthGuard,RoleGuard]},
  { path: 'cliente-add', component: ClienteAddComponent, canActivate: [AuthGuard,RoleGuard] },
  { path: 'cliente-edit/:id', component: ClienteEditComponent , canActivate: [AuthGuard,RoleGuard]},

  { path: 'employees', component: EmployeesListingComponent, canActivate: [AuthGuard,RoleGuard]},
  { path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard,RoleGuard] },
  { path: 'employee-add', component: EmployeeAddComponent , canActivate: [AuthGuard,RoleGuard]},

  { path: 'transactions', component: TransactionsListingComponent, canActivate: [AuthGuard,RoleGuard]},
  { path: 'transaction-details/:id', component: TransactionDetailsComponent, canActivate: [AuthGuard,RoleGuard]},
  { path: 'transaction-add', component: TransactionAddComponent, canActivate: [AuthGuard,RoleGuard] },
  { path: 'transaction-edit/:id', component: TransactionEditComponent , canActivate: [AuthGuard,RoleGuard]},

  { path: 'proposal-details/:id', component: ProposalDetailsComponent, canActivate: [AuthGuard,RoleGuard]},
  { path: 'proposal-edit/:id', component: ProposalEditComponent , canActivate: [AuthGuard,RoleGuard]},

  { path: 'notifications', component: NotificationsListingComponent, canActivate: [AuthGuard,RoleGuard,RoleGuard]},
  { path: 'notification-details/:id', component: NotificationDetailsComponent, canActivate: [AuthGuard,RoleGuard,RoleGuard]},
  { path: 'notification-add', component: NotificationAddComponent, canActivate: [AuthGuard,RoleGuard] },
  { path: 'notification-edit/:id', component: NotificationEditComponent , canActivate: [AuthGuard,RoleGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

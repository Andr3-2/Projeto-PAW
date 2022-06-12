import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../Models/book';
import { Cliente } from '../Models/cliente';
import { Employee } from '../Models/employee';
import { Transaction } from '../Models/transaction';
import { Notification } from '../Models/notification';
import { Proposal } from '../Models/proposal';

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getUser(token: any): Observable<any> {
    return this.http.post<any>(endpoint + '/profile', { token });
  }
  // Books - #########################################################

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(endpoint + 'books/show');
  }

  getBook(id: String): Observable<Book> {
    return this.http.get<Book>(endpoint + 'books/show/' + id);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(
      endpoint + 'books/create',
      JSON.stringify(book),
      httpOptions
    );
  }

  updateBook(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(
      endpoint + 'books/edit/' + id,
      JSON.stringify(book),
      httpOptions
    );
  }
  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(endpoint + 'books/delete/' + id, httpOptions);
  }

  // Clients - #########################################################

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(endpoint + 'clients/show');
  }

  getCliente(id: String): Observable<Cliente> {
    return this.http.get<Cliente>(endpoint + 'clients/show/' + id);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      endpoint + 'clients/create',
      JSON.stringify(cliente),
      httpOptions
    );
  }

  updateCliente(id: string, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      endpoint + 'clients/edit/' + id,
      JSON.stringify(cliente),
      httpOptions
    );
  }
  deleteCliente(id: string): Observable<Cliente> {
    return this.http.delete<Cliente>(
      endpoint + 'clients/delete/' + id,
      httpOptions
    );
  }

  // Employees - #########################################################

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(endpoint + 'employees/show');
  }

  getEmployee(id: String): Observable<Employee> {
    return this.http.get<Employee>(endpoint + 'employees/show/' + id);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      endpoint + 'employees/create',
      JSON.stringify(employee),
      httpOptions
    );
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      endpoint + 'employees/edit/' + id,
      JSON.stringify(employee),
      httpOptions
    );
  }
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(
      endpoint + 'employees/delete/' + id,
      httpOptions
    );
  }

  // Transactions - #########################################################

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(endpoint + 'transactions/show');
  }

  getTransaction(id: String): Observable<Transaction> {
    return this.http.get<Transaction>(endpoint + 'transactions/show/' + id);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      endpoint + 'transactions/create',
      JSON.stringify(transaction),
      httpOptions
    );
  }

  updateTransaction(
    id: string,
    transaction: Transaction
  ): Observable<Transaction> {
    return this.http.put<Transaction>(
      endpoint + 'transactions/edit/' + id,
      JSON.stringify(transaction),
      httpOptions
    );
  }
  deleteTransaction(id: string): Observable<Transaction> {
    return this.http.delete<Transaction>(
      endpoint + 'transactions/delete/' + id,
      httpOptions
    );
  }

  // Notifications - #########################################################

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(endpoint + 'notifications/show');
  }

  getNotification(id: String): Observable<Notification> {
    return this.http.get<Notification>(endpoint + 'notifications/show/' + id);
  }

  addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(
      endpoint + 'notifications/create',
      JSON.stringify(notification),
      httpOptions
    );
  }

  updateNotification(
    id: string,
    notification: Notification
  ): Observable<Notification> {
    return this.http.put<Notification>(
      endpoint + 'notifications/edit/' + id,
      JSON.stringify(notification),
      httpOptions
    );
  }
  deleteNotification(id: string): Observable<Notification> {
    return this.http.delete<Notification>(
      endpoint + 'notifications/delete/' + id,
      httpOptions
    );
  }

  // Proposals - #########################################################

  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(endpoint + 'proposals/show');
  }

  getProposalsFromClient(id: String): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(endpoint + 'proposals/showFromClient/' + id);
  }

  getProposal(id: String): Observable<Proposal> {
    return this.http.get<Proposal>(endpoint + 'proposals/show/' + id);
  }

  addProposal(proposal: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>(
      endpoint + 'proposals/create',
      JSON.stringify(proposal),
      httpOptions
    );
  }

  updateProposal(id: string, proposal: Proposal): Observable<Proposal> {
    return this.http.put<Proposal>(
      endpoint + 'proposals/edit/' + id,
      JSON.stringify(proposal),
      httpOptions
    );
  }
  deleteProposal(id: string): Observable<Proposal> {
    return this.http.delete<Proposal>(
      endpoint + 'proposals/delete/' + id,
      httpOptions
    );
  }
}

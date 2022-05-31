import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../Models/book';
import { Cliente } from '../Models/cliente';

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
}

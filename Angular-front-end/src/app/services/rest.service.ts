import { Injectable } from '@angular/core';
import { Book } from '../Models/book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}

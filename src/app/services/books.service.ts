import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { IBook } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public booksQuantity = new BehaviorSubject(5);

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<IBook[]> {
    return Observable.create((observer: Observer<IBook[]>) => {
      this.http
        .get<IBook[]>('api/books')
        .subscribe(
          response => {
            this.booksQuantity.next(response.length);
            observer.next(response);
          },
          error => observer.error(error)
        );
    });
  }

  public addBook(data: IBook): Observable<IBook> {
    return this.http.post<IBook>('api/books', data);
  }

  public updateBook(data: IBook): Observable<any> {
    return this.http.put(`api/books/${data.id}`, data);
  }

  public deleteBook(id: number): Observable<any> {
    return this.http.delete(`api/books/${id}`);
  }
}

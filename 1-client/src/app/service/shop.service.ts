import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';

import { BooksRespone, BookRespone } from '../modules/models/Book';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BooksRespone> {
    return this.http.get<BooksRespone>(`${enviroment.rootURL}/books`);
  }

  getOneBook(id: number): Observable<BookRespone> {
    return this.http.get<BookRespone>(`${enviroment.rootURL}/books/${id}`);
  }
}

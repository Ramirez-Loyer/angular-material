import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  public getBooks() {
    return this.http.get<Book[]>(environment.host+"/books");
  }

  public getBook(id : number) {
    return this.http.get<Book>(environment.host+"/books/"+id);
  }

}

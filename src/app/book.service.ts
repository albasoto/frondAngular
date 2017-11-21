import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }
  getBooks(){

     return this.http.get('http://localhost:1337/book').map(response => response);  
  }

  deleteBooks(parametro){
    return this.http.delete('http://localhost:1337/book/'+parametro).map(response => response);  
  }

  createBook(body){
    return this.http.post('http://localhost:1337/book/', body).map(response => response);  
  }



}

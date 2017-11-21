import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  mydata: Object;

  constructor(private http: HttpClient, private service: BookService) {

  }

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.service.getBooks().subscribe(data => {
      this.mydata = data
    })
  }

  eliminar(termino) {
    this.service.deleteBooks(termino).subscribe(data => {
      this.cargar();
    })
  }
  libro: any = {};
  ingresar() {

    const body = { title: this.libro.titulo, pages: this.libro.pagina };

    this.service.createBook(body).subscribe(data=>{
      console.log(data)
      this.cargar();
    })
 
  }

}

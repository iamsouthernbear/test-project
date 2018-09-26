import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public bookQuantity;

  constructor (private booksService: BooksService) { }

  ngOnInit() {
    this.booksService
      .booksQuantity
      .subscribe(val => (this.bookQuantity = val));
  }
}

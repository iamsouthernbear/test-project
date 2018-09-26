import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  public editing: number;
  public books: IBook[];
  public editingBook: IBook;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(
      (response: IBook[]) => (this.books = response),
      (error) => console.log(error)
    );
  }

  public updateValidation() {
    const values = Object.values(this.editingBook);
    const notEmpty = values.every(val => !!val);
    const validDateFormat = this.editingBook.addDate.match('[0-9]{4}-[0-9]{2}-[0-9]{2}');
    return notEmpty && validDateFormat;
  }

  public edit(id: number): void {
    this.editing = id;
    this.editingBook = { ...this.books.find(el => el.id === id) };
  }

  public updateBook(): void {
    this.booksService
      .updateBook(this.editingBook)
      .subscribe(() => {
        const updatedBookId = this.books.findIndex((el) => el.id === this.editingBook.id);
        this.books[updatedBookId] = this.editingBook;
        alert('Successfully updated');
      });
    this.editing = null;
  }

  public removeBook(id: number): void {
    if (confirm('Вы уверены?')) {
      this.booksService
        .deleteBook(id)
        .subscribe(() => {
          const deletedBookId = this.books.findIndex((el) => el.id === id);
          this.books.splice(deletedBookId, 1);
          this.booksService.booksQuantity.next(this.books.length);
          alert('Successfully removed!');
        });
    }
  }
}

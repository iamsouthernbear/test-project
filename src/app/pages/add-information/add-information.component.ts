import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrls: ['./add-information.component.scss']
})
export class AddInformationComponent {

  public bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router,
  ) {
    this.createForm();
  }

  public submitForm(): void {
    this.booksService
      .addBook(this.bookForm.value)
      .subscribe(() => this.router.navigateByUrl('/info'));
  }

  private createForm(): void {
    const addDateValidators = [
      Validators.required,
      Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')
    ];
    const yearValidators = [
      Validators.required,
      Validators.maxLength(4)
    ];
    this.bookForm = this.formBuilder.group({
      id: Number((Math.random() * 1000).toFixed(0)),
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: [null, Validators.compose(yearValidators)],
      addDate: ['', Validators.compose(addDateValidators)],
      comment: '',
    });
  }
}

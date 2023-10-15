import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  // * Properties
  private mySavedBooks: Book[] = [
    new Book(
      123,
      '1984',
      'George Orwell',
      'https://source.unsplash.com/150x150/?1984'
    ),
    new Book(
      456,
      'To Kill a Mockingbird',
      'Harper Lee',
      'https://source.unsplash.com/150x150/?mockingbird'
    ),
    new Book(
      789,
      'The Great Gatsby',
      'F. Scott Fitzgerald',
      'https://source.unsplash.com/150x150/?gatsby'
    ),
  ];

  // * Events
  selectedBook = new EventEmitter<Book>();
  bookListChanged = new EventEmitter<Book[]>();

  // * Constructor
  constructor() {}

  // * Methods
  // READ ALL - get all books
  getSavedBooks() {
    return this.mySavedBooks.slice();
  }

  // READ ONE - get one book
  getBookById(id: number) {
    const foundBook = this.mySavedBooks.find((book) => book.id === id);

    return foundBook;
  }

  // CREATE - add a new book
  addBook(newBook: Book) {
    this.mySavedBooks.push(newBook); // push() adds one or more elements to the end of an array and returns the new length of the array
    this.bookListChanged.emit(this.mySavedBooks.slice()); // emit the updated list of books
  }

  // UPDATE - update an existing book
  updateBook(updatedBook: Book) {}

  // DELETE - delete an existing book
  deleteBookById(id: number) {
    const filteredList = this.mySavedBooks.filter((book) => book.id !== id);
    this.mySavedBooks = filteredList;

    this.bookListChanged.emit(this.mySavedBooks.slice());
  }
}

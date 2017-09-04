import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { BooksService } from 'app/services/books.service';


@Component({
    selector: 'st-books',
    templateUrl: './books.component.html'
})
export class Books2Component implements OnInit{

    books: Book[];

    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
         this.booksService.getBooks()
             .subscribe ( resp => this.books = resp);
    }


}
import { Component, OnInit } from '@angular/core';
import { WebBook } from 'app/services/webbook';
import { BooksService } from 'app/services/books.service';

@Component({
    selector: 'st-books',
    templateUrl: './books3.component.html'
})
export class Books3Component implements OnInit{

    books: WebBook[];

    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
         this.booksService.getWebBooks()
             .subscribe ( resp => this.books = resp);
    }


}
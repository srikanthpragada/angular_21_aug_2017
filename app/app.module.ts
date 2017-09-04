import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';

import { Books2Component } from './http/books2.component';
import { BooksService } from './services/books.service';
import { Books3Component } from './http/books3.component';
import { AddBookComponent } from './http/add-book.component';



@NgModule({
  declarations: [
     Books2Component, Books3Component, AddBookComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ BooksService  ],
  bootstrap: [ AddBookComponent ]
})
export class AppModule { }

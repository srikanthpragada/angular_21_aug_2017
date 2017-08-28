import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookComponent } from './book.component';
import { BindingComponent } from './binding.component';

@NgModule({
  declarations: [
    BookComponent, BindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }

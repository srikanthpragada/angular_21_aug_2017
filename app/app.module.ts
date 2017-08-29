import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookComponent } from './book.component';
import { BindingComponent } from './binding.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';

import { FirstComponent } from './multi/first.component';
import { SecondComponent } from './multi/second.component';

import { ParentComponent } from './multi/parent.component';
import { ChildComponent } from './multi/child.component';


@NgModule({
  declarations: [
    BookComponent, BindingComponent, PipesDemoComponent, BracketsPipe,
    FirstComponent,SecondComponent,
    ParentComponent, ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }

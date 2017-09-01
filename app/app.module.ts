import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { BookComponent } from './book.component';
import { BindingComponent } from './binding.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';

import { FirstComponent } from './multi/first.component';
import { SecondComponent } from './multi/second.component';

import { ParentComponent } from './multi/parent.component';
import { ChildComponent } from './multi/child.component';

import { UseLogComponent } from './services/uselog.component';
import { LoginComponent } from './forms/login.component';
import { ReactiveLoginComponent } from './forms/reactive-login.component';


@NgModule({
  declarations: [
    BookComponent, BindingComponent, PipesDemoComponent, BracketsPipe,
    FirstComponent,SecondComponent,
    ParentComponent, ChildComponent, UseLogComponent,
    LoginComponent, ReactiveLoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [ ReactiveLoginComponent]
})
export class AppModule { }

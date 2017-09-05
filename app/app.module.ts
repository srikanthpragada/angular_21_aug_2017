import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './routing/add.component';
import { DetailsComponent } from './routing/details.component';
import { ListComponent} from './routing/list.component';
import { MainComponent } from './routing/main.component';

const appRoutes : Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'details/:index', component: DetailsComponent },
  { path: '',  component : ListComponent, pathMatch : 'full'},
  { path: '**',  component : ListComponent}
];

 

@NgModule({
  declarations: [
     ListComponent, MainComponent, AddComponent, DetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
    ,RouterModule.forRoot(appRoutes)
  ],
  providers: [  ],
  bootstrap: [ MainComponent ]
})
export class AppModule { }

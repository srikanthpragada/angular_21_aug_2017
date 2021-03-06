import { Component } from '@angular/core';
import { WebBook } from 'app/services/webbook';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

@Component({
    selector : 'add-book',
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
    book : WebBook;
    done : boolean = false;
    added : boolean = false; 
    
    constructor(private http: Http) {
      this.book = new WebBook();
    }

    addBook()  {
          // call restful service  
          this.done = false;
          this.added = false; 
          this.http.post("http://test.srikanthpragada.com/api/books", 
                              this.book)
            .map( (resp:Response) => {return resp})
            .finally( () => { this.done = true; } )
            .catch(this.handleError)
            .subscribe(result => {this.added = true;});
    }

   handleError(response) 
   {
       console.log(response);
       this.added = false; 
      //  this.message = response.statusText;
       return Observable.throw(response.statusText);
   }

}
import { Component  } from '@angular/core';
import { BracketsPipe  } from './brackets.pipe';

@Component({
    selector: 'st-pipes',
    template: `
        <h1>
           {{ today  | date : 'longDate'}}
           <p></p>
           {{ today  | date : 'dd-MM-y'}}
           <p></p>
           {{ amount | currency : 'INR': false :'10.2-4' }}
           <p></p>
           {{ amount | number : '8.2-4' }}
           <p></p>
           {{ 0.1234 | percent }}
           <p></p>
           {{ name  | uppercase  }}
           <p></p>
           {{ name  | slice : -4  | uppercase  }}
           <p></p>
           {{ name  | brackets }}
           <p></p>
           {{ name  | brackets : 'u' }}
         </h1>
    `
})
export class PipesDemoComponent   {
   today : Date;
   amount : number;
   name : string;

   constructor() {
       this.today = new Date();
       this.amount = 23939393.383;
       this.name ="Srikanth Technologies";
   }
}
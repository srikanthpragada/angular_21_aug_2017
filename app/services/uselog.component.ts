import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'st-log',
    templateUrl: './uselog.component.html',
    providers: [LogService]
})
export class UseLogComponent {
   
    // Injects LogService into logService property
    constructor(private logService: LogService) {
       
    }

    logMessage(msg: string): void {
        this.logService.log(msg);
    }
}
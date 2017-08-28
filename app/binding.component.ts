import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    message : string  = "Winners never quit! Quitters never win!";
    isBold : boolean  = true; 
    isBig : boolean  = true; 
    color : string = "blue";
    myclasses = { "isBold" : true, "isBig" : true};

    constructor() { }

    ngOnInit() { }

    toggleBold() {
        this.isBold  = !this.isBold; 
        
    }

     toggleBig() {
        this.isBig  = !this.isBig; 
        this.myclasses.isBig = !this.myclasses.isBig;
    }
}
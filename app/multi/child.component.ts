import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-child',
    template: 'This child component!'
})
export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-parent',
    template: 
    ` <h1>Parent Component </h1>
      <st-child></st-child>
    `
})
export class ParentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
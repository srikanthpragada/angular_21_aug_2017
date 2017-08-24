import { Component } from '@angular/core';

@Component({
    selector: 'st-book',
    templateUrl : './book.component.html'
})
export class BookComponent  {
  title :string = "Angular4 Cook Book";
  price :number = 500;
  ebookUrl : string = "https://www.amazon.in/Oracle-Database-Beginners-Srikanth-Pragada-ebook/dp/B01HAZC50U?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0&portal-device-attributes=desktop&ref_=sr_1_1";
  // ebookUrl : string = "";
  chapters : string [] = [ "Getting Started",
                           "Directives",
                           "Ajax", 
                           "Services"];

  addChapter(newchapter : string) : void {
      console.log("Adding new chapter");
      this.chapters.push(newchapter);
  }
 
}
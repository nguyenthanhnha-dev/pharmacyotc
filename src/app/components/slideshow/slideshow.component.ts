import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  imageUrlArray : string[] = ['https://image.ibb.co/jEnaMT/slide1.jpg', 'https://image.ibb.co/cVVqo8/slide2.jpg'];

  constructor() { 
  }

  ngOnInit() {
    console.log("Slideshow Component init successfully!")
  }

}

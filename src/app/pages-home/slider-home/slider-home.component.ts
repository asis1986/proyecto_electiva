import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styles: []
})
export class SliderHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $('.slider').slider();
    });

    
  }

}

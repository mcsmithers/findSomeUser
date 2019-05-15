import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-demo-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  textInput;

  constructor() { }

  ngOnInit() {
  }

  submit(typedInput){
    this.textInput=typedInput;
    console.log(typedInput)
  }

}

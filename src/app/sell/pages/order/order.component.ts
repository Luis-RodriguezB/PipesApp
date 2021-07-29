import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sells.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  isCapitalLetter: boolean = true;
  isToggleCapitalLetter: boolean = false;
  

  typeOrder:string = '';
  heroes: Hero[] = [
    {
      name: 'batman',
      flight: false,
      color: Color.blue
    }, 
    {
      name: 'superman',
      flight: true,
      color: Color.black
    },
    {
      name: 'green Lantern',
      flight: true,
      color: Color.green
    },
    {
      name: 'red Hood',
      flight: false,
      color: Color.red
    },
    {
      name: 'martian manhunter',
      flight: true,
      color: Color.green
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.isCapitalLetter = !this.isCapitalLetter;
  }

  orderBy( value:string){
    this.typeOrder = value;
  }

  toggleCapitalLetters() {
    this.isToggleCapitalLetter = !this.isToggleCapitalLetter;
  }

}

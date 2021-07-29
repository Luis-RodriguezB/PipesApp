import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  nameLower: string = 'luis';
  nameUpper: string = 'LUIS';
  fullName: string = 'luIs RoDriGueZ';

  currentDate: Date = new Date();
}

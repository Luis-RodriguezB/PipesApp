import { Component } from '@angular/core';
import { interval } from 'rxjs';

interface Person {
  name:string;
  gender: string;
  age: number;
  direction: string
}

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  persons: Person[] = [
    {
      name: 'Mario',
      gender: 'male',
      age: 29,
      direction: 'San José, Costa Rica'

    },
    {
      name: 'Gabriela',
      gender: 'female',
      age: 21,
      direction: 'San José, Costa Rica'
    }
  ];
  currentPerson: Person = this.persons[0];
  person: Person = this.persons[0];

  changePerson() {
    this.currentPerson = this.currentPerson.name === this.persons[0].name ? this.persons[1] : this.persons[0];
  }

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  clients: string[] = ['Luis', 'Tatiana', 'Juan', 'Walter', 'Mario'];
  restoreClient: string[] = ['Luis', 'Tatiana', 'Juan', 'Walter', 'Mario'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  } 

  deletePerson() {
    this.clients.pop();
  }

  myObservable = interval(1000);
}

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { CapitalLetterPipe } from './pipes/capitalLetters.pipe';
import { Flight } from './pipes/flight.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { ColorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    CapitalLetterPipe,
    Flight,
    OrderPipe,
    ColorPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SellModule { }

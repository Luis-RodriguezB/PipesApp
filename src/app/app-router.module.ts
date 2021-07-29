import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sell/pages/basics/basics.component';
import { NumbersComponent } from './sell/pages/numbers/numbers.component';
import { NotCommonsComponent } from './sell/pages/not-commons/not-commons.component';
import { OrderComponent } from './sell/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: '' 
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }

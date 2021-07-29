import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SellModule } from './sell/sell.module';

import localEsCR from '@angular/common/locales/es-CR';
import localEsFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEsCR );
registerLocaleData( localEsFR );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SellModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

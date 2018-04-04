import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ForemanComponent } from './foreman/foreman.component';
import { ProductsComponent } from './products/products.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NavegacionComponent } from './navegacion/navegacion.component';



@NgModule({
  declarations: [
    AppComponent,
    ForemanComponent,
    ProductsComponent,
    CarritoComponent,
    TrackingComponent,
    NavegacionComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

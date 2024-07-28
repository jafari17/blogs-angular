import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePagesComponent } from './home-pages/home-pages.component';
 

@NgModule({
  declarations: [
    HomePagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
 
  ]
})
export class PagesModule { }

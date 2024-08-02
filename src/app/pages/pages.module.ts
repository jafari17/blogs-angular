import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePagesComponent } from './home-pages/home-pages.component';
import { PostPagesComponent } from './post-pages/post-pages.component';
 

@NgModule({
  declarations: [
    HomePagesComponent,
    PostPagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
 
  ]
})
export class PagesModule { }

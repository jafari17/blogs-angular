import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
 

@NgModule({
  declarations: [
    HomeComponent,
     CategoriesCreateComponent,
      
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ],
  exports:[
     
  ]
})
export class CategoriesModule { }

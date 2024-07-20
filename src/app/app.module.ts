import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { CategoriesModule } from './categories/categories.module';
 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    HttpClientModule,
    CategoriesModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }


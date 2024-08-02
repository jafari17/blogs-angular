import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './home-pages/home-pages.component';
import { PostPagesComponent } from './post-pages/post-pages.component';

const routes: Routes = [
  {
    path:'pages',
    component: HomePagesComponent,
   },
   {
    path:'pages/post/:id',
    component: PostPagesComponent,
   } 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


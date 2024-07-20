import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';

const routes: Routes = [
  {
    path: 'categories/home',
    component: HomeComponent,
  },
  // {
  //   path: 'categories/create',
  //   component: CreateComponent,
  // },
  {
    path: 'categories/create',
    component: CategoriesCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }



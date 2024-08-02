import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from '../tests/tests.component';
import { EditComponent } from '../posts/edit/edit.component';
import { HomeComponent } from '../posts/home/home.component';
 import { CreateComponent } from '../posts/create/create.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { HomeCategoriesComponent } from '../categories/home-categories/HomeCategoriesComponent.component';
import { CategoriesCreateComponent } from '../categories/categories-create/categories-create.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDashboardComponent,
    children: [
      {
        path: 'test',
        component: TestsComponent,
      },
      {
        path: 'posts/home',
        component: HomeComponent,
      },
      {
        path: 'posts/create',
        component: CreateComponent ,
      
      },
      {
        path:'posts/edit/:id',
        component: EditComponent
      },
      {
        path: 'categories/home',
        component: HomeCategoriesComponent,
      }, 
      {
        path: 'categories/create',
        component: CategoriesCreateComponent,
      },

    ],
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

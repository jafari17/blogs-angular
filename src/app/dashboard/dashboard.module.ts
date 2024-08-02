import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestsComponent } from '../tests/tests.component';
import { NavComponent } from '../nav/nav.component';
import { SideComponent } from '../side/side.component';
import { EditComponent } from '../posts/edit/edit.component';
import { HomeComponent } from '../posts/home/home.component';
 import { CreateComponent } from '../posts/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from "ngx-quill";
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
 import { CategoriesCreateComponent } from '../categories/categories-create/categories-create.component';
import { HomeCategoriesComponent } from '../categories/home-categories/HomeCategoriesComponent.component';

@NgModule({
  declarations: [
    TestsComponent,
    NavComponent,
    SideComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    HomeCategoriesComponent,
    CategoriesCreateComponent,
    LayoutDashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }]
   })
  ]
})
export class DashboardModule { }

import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent implements OnInit {
  allCategories: Categories[] = [];
 
  constructor(private categoryService: CategoriesService) {}
 
  ngOnInit(): void {
    this.get();
  }

  public onClick(){
    console.log('test output')
  }
  public userAdded(users: Categories[]) {
    console.log('test output')
    this.get();

  }




  get() {
    this.categoryService.get().subscribe((data) => {
      this.allCategories = data;
    });
  }

  deleteItem(id:number) {
    this.categoryService.delete(id).subscribe({
      next: (data) => {
        this.allCategories = this.allCategories.filter(x => x.id != id)
         
      },
    });
}
}
import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
import { Component,OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { Categories } from 'src/app/categories/categories';
import { CategoriesService } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  postForm: Posts = {
    id: 0,
    title: '',
    category: '',
    description: '',
  };
  allCategories: Categories[] = [];
  
  constructor(private postService:PostsService,
    private router:Router,
    private categoryService: CategoriesService) {}
 
    

  ngOnInit(): void {
    initFlowbite();
    this.getCategories();

 
  }

  
 
  create(){
    this.postService.create(this.postForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/posts/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  getCategories() {
    this.categoryService.get().subscribe((data) => {
      this.allCategories = data;
    });
  }
}

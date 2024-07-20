import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { initFlowbite } from 'flowbite';
import { Categories } from 'src/app/categories/categories';
import { CategoriesService } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  postForm: Posts = {
    id: 0,
    title: '',
    category: '',
    description: '',
  };
  allCategories: Categories[] = [];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private postService: PostsService,
    private categoryService: CategoriesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });

    initFlowbite();
    this.getCategories();


  }
 
  getById(id: number) {
    this.postService.getById(id).subscribe((data) => {
      this.postForm = data;
    });
  }
 
  update() {
    this.postService.update(this.postForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/posts/home"]);
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

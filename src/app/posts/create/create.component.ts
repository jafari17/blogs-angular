import { Component,OnInit } from '@angular/core';
// import { initFlowbite } from 'flowbite';

import { Router } from '@angular/router';
import { Labels, Posts } from '../posts';
import { PostsService } from '../posts.service';
import { Categories } from 'src/app/categories/categories';
import { CategoriesService } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  allCategories: Categories[] = [];
  allLabels: Labels[] =[]
  allLabels2: Labels[] =[]
  postForm: Posts = {
    id: 0,
    title: '',
    category: '',
    description: '',
    labels: [],
    active:true
  };
  public labels: Labels = {
    label: '',
  };
   labelsAdd: Labels = {
    label: '',
  };
  public labelsArray = new Array();

  constructor(private postService:PostsService,
    private router:Router,
    private categoryService: CategoriesService) {}
 
    

  ngOnInit(): void {
    // initFlowbite();
    this.getCategories();
  }

  
  labelRegister():void{
    var length = this.labelsArray.push(this.labels.label) 
    this.labels.label = ''
   }
  labelRemove(label:any){
 
    delete this.labelsArray[this.labelsArray.findIndex(item => item == label)]; 
    this.labelsArray = this.labelsArray.filter(item => item); 
  }
  
  create(){
    console.log("create")
 
    for(let item of this.labelsArray){
        this.labels = {
        label: item,
      };

     this.postForm.labels?.push( this.labels)
       console.log(this.postForm.labels )

    }

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

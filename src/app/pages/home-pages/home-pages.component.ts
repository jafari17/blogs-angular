import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labels, Posts } from 'src/app/posts/posts';
import { PostsService } from 'src/app/posts/posts.service';
// import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {
  allPosts: Posts[] = [];
  allPostsSave: Posts[] = [];
   constructor(private postService: PostsService) {}
 
  ngOnInit(): void {
    this.getPosts();
  }
 
  getPosts() {
    console.log("getPosts()")
    this.postService.get().subscribe((data) => {
      
      this.allPosts = data;
      this.allPostsSave = data;
    });
  }



  deleteItem(id:number) {
    this.postService.delete(id).subscribe({
      next: (data) => {
        this.allPosts = this.allPosts.filter(x => x.id != id) 
      },
    });
}

activeItem(post:Posts) {
  console.log(post.active)
  post.active = !post.active
  console.log(post.active)

  this.postService.update(post).subscribe({
    next: (data) => {
      // this.allPosts = this.allPosts.filter(x => x.id != post) 
    },
  });
 
   
}

showAll(){
  this.allPosts = this.allPostsSave; 

}


showActive(){
   this.allPosts = this.allPostsSave; 
   this.allPosts = this.allPosts.filter(x => x.active == true) 
}


showNOActive(){
    this.allPosts = this.allPostsSave; 
    this.allPosts = this.allPosts.filter(x => x.active == false) 
}

}
import { Component,OnInit } from '@angular/core';

 
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPosts: Posts[] = [];
 
  constructor(private postService: PostsService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.postService.get().subscribe((data) => {
      this.allPosts = data;
    });
  }

  deleteItem(id:number) {
    this.postService.delete(id).subscribe({
      next: (data) => {
        this.allPosts = this.allPosts.filter(x => x.id != id)
         
      },
    });
}
}
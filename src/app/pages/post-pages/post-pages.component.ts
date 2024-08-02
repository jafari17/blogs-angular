import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/posts/posts';
import { PostsService } from 'src/app/posts/posts.service';

@Component({
  selector: 'app-post-pages',
  templateUrl: './post-pages.component.html',
  styleUrls: ['./post-pages.component.css']
})
export class PostPagesComponent {
  public postForm: Posts = {
    id: 0,
    title: '',
    category: '',
    description: '',
    labels: []
  };
 

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private postService: PostsService,
   ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });

    // initFlowbite();
 

  }
   
  getById(id: number) {
    this.postService.getById(id).subscribe((data) => {
      this.postForm = data;
     });
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labels, Posts } from 'src/app/posts/posts';
import { PostsService } from 'src/app/posts/posts.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {
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

    initFlowbite();
 

  }
   
  getById(id: number) {
    this.postService.getById(id).subscribe((data) => {
      this.postForm = data;
     });
  }

}

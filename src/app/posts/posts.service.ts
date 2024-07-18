import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Posts[]>('http://localhost:3001/Posts');
  }
  create(payload: Posts) {
    return this.http.post<Posts>('http://localhost:3001/Posts', payload);
  }

  getById(id: number) {
    return this.http.get<Posts>(`http://localhost:3001/Posts/${id}`);
  }
    
  update(payload:Posts){
    return this.http.put(`http://localhost:3001/Posts/${payload.id}`,payload);
  }
  
  delete(id:number){
    return this.http.delete<Posts>(`http://localhost:3001/Posts/${id}`);
 }
} 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Categories[]>('http://localhost:3001/categories');
  }

  create(payload: Categories) {
    return this.http.post<Categories>('http://localhost:3001/Categories', payload);
  }
  getById(id: number) {
    return this.http.get<Categories>(`http://localhost:3001/Categories/${id}`);
  }
    
  update(payload:Categories){
    return this.http.put(`http://localhost:3001/Categories/${payload.id}`,payload);
  }
  
  delete(id:number){
    return this.http.delete<Categories>(`http://localhost:3001/Categories/${id}`);
 }
}

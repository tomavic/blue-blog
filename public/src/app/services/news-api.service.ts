import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private url = 'http://localhost:5000/api/posts';

  constructor(private http:HttpClient) { }


  getPosts() {
    return this.http.get(this.url)
   }

   getPostById(id: String){
    return this.http.get(`${this.url}/${id}`)
   }
}

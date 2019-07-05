import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:5000/api/user';

  constructor(private http: HttpClient) { }


  login(data) {
    return this.http.post(`${this.url}/auth`, data)
  }


  signup(data) {
    return this.http.post(`${this.url}/register`, data)
  }



}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-layout',
  template: 
  `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})

export class FullLayoutComponent implements OnInit {
  
  constructor(
    private userService: UserService) {
  }

  ngOnInit() {

  }

}

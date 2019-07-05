import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  authData = {
    email: "",
    password: ""
  };



  constructor(
    private user: UserService, 
    private router: Router) { }

  ngOnInit() {
    localStorage.removeItem("auth_token")
  }



  doLogin(form?: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.login()
    }
  }


  login() {
    this.user.login(this.authData).subscribe(
      (res: any) => {
        localStorage.setItem("auth_token", res.token);
        localStorage.setItem("user_info", JSON.stringify(res.user));
        this.router.navigate(['/home']);
      }, err => {
        console.log(err.error.reason);
      }
    );
  }

}

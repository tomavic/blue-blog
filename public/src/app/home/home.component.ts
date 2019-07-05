import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  private userInfo;
  posts;
  constructor(private user: UserService,     private router: Router,private newsApi: NewsApiService) { }

  ngOnInit() {
    const data = {
      email: "tomas@yahoo.com",
      password: "Cc123456"
    }
      this.user.login(data).subscribe(
        (res: any) => {
          localStorage.setItem("auth_token", res.token);
          localStorage.setItem("user_info", JSON.stringify(res.user));
          this.newsApi.getPosts().subscribe((res: any) => {
            console.log(res);
            this.posts = res.data;
          });
        }, err => {
          console.log(err.error.reason);
        }
      );
    
    this.userInfo = JSON.parse(localStorage.getItem("user_info"));
    console.log(this.userInfo);
  }


  view(post: any) {
    this.router.navigate([`/home/post/${post.title}`]);
  }



}

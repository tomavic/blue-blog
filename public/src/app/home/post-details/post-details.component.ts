import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  post;
  constructor(private news: NewsApiService,private route: ActivatedRoute,) { 
    
  }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    let id = this.route.snapshot.paramMap.get('id');

    this.news.getPostById(id).subscribe((res: any) => {
      this.post = res.data;
    })
  }

}

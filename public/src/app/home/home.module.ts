import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post/:title',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [HomeComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }

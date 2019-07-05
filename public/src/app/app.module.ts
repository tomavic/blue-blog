import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NewsApiService } from './services/news-api.service';
import { UserService } from './services/user.service';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { MainGuard } from './guards/main.guard';
import { FullLayoutComponent } from './components/full-layout.component';
import { MyInterceptor } from './interceptor.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
  { path: 'register', canActivate: [AuthGuard], component: RegisterComponent},
  { 
    path: '',  
    component: FullLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: "./home/home.module#HomeModule"
      }
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FullLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NewsApiService,
    UserService,
    AuthGuard,
    MainGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

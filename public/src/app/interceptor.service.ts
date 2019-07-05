/**
 * @author TOoma
 * @namespace LahlopaApp
 * @class MyInterceptor
 **********************/
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor() {}


  /**
   * 
   * @param req HttpRequest
   * @param next HttpHandler
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("auth_token") || '';

    const authReq = req.clone({
      headers: req.headers
        .append('x-auth-token', token)
    });

    return next.handle(authReq);

  }

}
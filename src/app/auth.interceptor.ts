import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { SignupService } from './signup.service';
import { RegistrationService } from './registration.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private regService:RegistrationService, private router:Router) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        const token = this.regService.getLocalStorage('access');
        console.log("Token: "+ token);
        console.log("Local Storage: " +localStorage);
        
        if (token) {
          request = request.clone({
            setHeaders: { Authorization: 'Bearer ' + token },
          });
        }
        return next.handle(request);
      }
}
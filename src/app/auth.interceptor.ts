import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { SignupService } from './signup.service';
import { RegistrationService } from './registration.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private regService:RegistrationService) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        const token = this.regService.getLocalStorage('accessToken');
        console.log(token);
        if (token) {
          request = request.clone({
            setHeaders: { Authorization: 'Bearer ' + token },
          });
        }
        return next.handle(request);
      }
}
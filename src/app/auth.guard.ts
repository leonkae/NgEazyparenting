import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private regService: RegistrationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url = state.url;
      return this.checkIsLoggedIn(url);
    }
    checkIsLoggedIn(nextUrl: string): true | UrlTree {
      const userId = this.regService.getLocalStorage('userId');
      if (userId !== null) return true;
      // this.regService.redirectUrl = nextUrl;
      return this.router.parseUrl('/login');
    }
  }
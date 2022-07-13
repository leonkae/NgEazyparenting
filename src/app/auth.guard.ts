import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import { Profile } from './models/Profile';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  profile!: Profile;
  constructor(private regService: RegistrationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url = state.url;
    return this.checkIsLoggedIn(url);
  }
  checkIsLoggedIn(url: string): true | UrlTree {
    this.regService.profiles.subscribe(
      (profile: Profile) => (this.profile = profile)
    );
    if (this.profile != null) return true;
    this.regService.redirectUrl = url;
    return this.router.parseUrl('/login');
  }
}
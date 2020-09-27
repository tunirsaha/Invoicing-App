import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/shared/services/helper.service';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _hs: HelperService
  ) { }
  isLoggedIn: boolean;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLoggedIn = this._auth.isLoggedIn
    if (this.isLoggedIn === true) {
      return true;
    } else {
      this._hs.goTo('login')
      return false;
    }
  }

}

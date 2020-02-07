// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';
 
// //import { AuthService } from '../_services/authentication.service';
 
// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
// constructor(
// private router: Router,
// private authenticationService: AuthService,
// private authService: AuthService
// ) {}
 
// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
// const currentUser = this.authenticationService.currentUserValue;
// if (currentUser) {  
// // authorised so return true
// return true;
// }
 
// // not logged in so redirect to login page
// this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
// return false;
// }
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in'])
    }
    return true;
  }

}
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
 
//import { AuthService } from '../_services/authentication.service';
 
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
constructor(
private router: Router,
private authenticationService: AuthService,
private authService: AuthService
) {}
 
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.iSLoggedIn === true) {
      return true
      }
      this.router.navigate(['/login'])
      return false

 
// not logged in so redirect to login page
this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
return false;
}
}


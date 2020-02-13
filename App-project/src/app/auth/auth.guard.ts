import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { trigger } from '@angular/animations';

//import { AuthService } from '../_services/authentication.service';

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.authService.iSLoggedIn !== true) {
    //   this.router.navigate(["/login"], {
    //     queryParams: { returnUrl: state.url }
    //   });
    // }
    // return true;
    return this.userService.isLogged === route.data.isLogged
  }
}

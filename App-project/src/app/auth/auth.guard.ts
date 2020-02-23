import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { UserService } from "../user/user.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.isLogged === route.data.isLogged;
  //TODO: implement new auth guard logic for protecting the logged in user pages
}
}

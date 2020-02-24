import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "./auth.service";
import { User } from "./user";
import { catchError, map, take, tap } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { FirebaseAuth } from "@angular/fire";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  currentUser: User;

  constructor(
    // private userService: Auth,
    private router: Router,
    private authService: AuthService
  ) // private auth: A
  {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.afAuth.authState.pipe(
      take(1),
      map(auth => !!auth),
      tap(authenticated => {
        if (!authenticated) this.router.navigate(["/home"]);
      })
    );
  }
}

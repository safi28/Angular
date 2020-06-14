import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as firebase from "firebase/app";
import { first, shareReplay } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  currentUserSubject: BehaviorSubject<firebase.User>;
  _user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) {
    afAuth.authState.subscribe(user => (this._user = user));
  }

  get user(): firebase.User {
    return this._user;
  }

  set user(value: firebase.User) {
    this._user = value;
  }

  get authenticated(): boolean {
    return this._user !== null;
  }

  get id(): string {
    return this.authenticated ? this.user.uid : '';
  }

  doRegister(value: any) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            this.currentUserSubject.next(res.user);

            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  doLogout() {
    return this.afAuth.auth.signOut().then(
      () => {
        this.toastr.success("Log out successfully!");
        this.router.navigate(["/home"]);
      },
      err => {
        this.toastr.error(err.error, "Error");
      }
    );
  }

  get isLogged() {
    return !!this.user;
  }

  get iSLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null ? true : false;
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as firebase from 'firebase';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class AuthService {
  userData: any;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("user"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
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

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
 }

 async loggedUser() {
  const user = await this.isLoggedIn()
  if (user) {
    return true;
  } else {
    return false
 }
}
  get iSLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));

    return user !== null ? true : false;
  }
}

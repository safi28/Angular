import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as firebase from "firebase/app";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {}

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

  get iSLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null ? true : false;
  }
}

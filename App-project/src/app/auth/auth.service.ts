import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from '../user/user.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
  ) {

  }

  doRegister(value: any) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            console.log(res);
            
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
            this.afAuth.authState.subscribe(user => {
              if (user) {
                this.userData = user;
                console.log(user);
                
        
                localStorage.setItem("user", JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem("user"));
              } else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
              }
            });
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
        this.router.navigate(["/"]);
      },
      err => {
        this.toastr.error(err.error, "Error");
      }
    );
  }

  get iSLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    
    return user !== null  ? true : false;
  }
 
}
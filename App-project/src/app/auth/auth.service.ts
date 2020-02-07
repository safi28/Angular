import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(public afAuth: AngularFirestore, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable()
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
}

// export class AuthService {
//  private currentUserSubject: BehaviorSubject<User>;
// public currentUser: Observable<User>;

// constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
//   this.currentUserSubject = new BehaviorSubject<User>(
//     JSON.parse(localStorage.getItem("currentUser"))
//   );
//   this.currentUser = this.currentUserSubject.asObservable();
// }

// public get currentUserValue(): User {
//   return this.currentUserSubject.value;
// }

// login(email: string, password: string) {
//   return this.http
//     .post<any>(`auth/login`, { email, password })
//     .pipe(
//       map(user => {
//         if (user && user.token) {
//           localStorage.setItem("currentUser", JSON.stringify(user.result));
//           this.currentUserSubject.next(user);
//         }
//         return user;
//       })
//     );
// }

// logout() {
//   localStorage.removeItem("currentUser");
//   this.currentUserSubject.next(null);
// }

// }

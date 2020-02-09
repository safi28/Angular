import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  // get authenticated(): boolean {
  //   return this.authState !== null;
  // }

  // get currentUser(): any {
  //   return this.authenticated ? this.authState : null;
  // }

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
            this.afAuth.authState.subscribe(user => {
              if (user) {
                this.userData = user;
        
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
        localStorage.removeItem("user");
        this.currentUserSubject.next(null);

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
    return user !== null && user.email !== null ? true : false;
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
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
}

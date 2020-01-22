import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { User } from "src/src/app/_models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    console.log(this.currentUserSubject);
    
    return this.currentUserSubject.value
  }
}

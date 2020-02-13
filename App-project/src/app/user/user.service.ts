import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: { username: string; password: string } = null;

  constructor() {
    const currentUser = localStorage.getItem("user");
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }
  get isLogged() {
    console.log(this.currentUser);
    
    return !!this.currentUser;
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem("user");
  }
}

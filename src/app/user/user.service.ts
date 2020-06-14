import { Injectable } from "@angular/core";
import { User } from "firebase";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: { email: string; password: string } = null;
  name: string;

  constructor() {
    const currentUser = localStorage.getItem("user");
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  get isLogged() {
    return !!this.currentUser;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("user");
  }
}

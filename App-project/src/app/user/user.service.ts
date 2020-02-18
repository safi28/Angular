import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { RegisterComponent } from "../authentication/register/register.component";

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

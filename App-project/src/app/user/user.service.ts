import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: { email: string; password: string } = null;
  name: string;

  constructor(private http: HttpClient) {
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

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: string;

  constructor() {}

  userInfo() {
    console.log(this.user);
    
    return this.user;
  }
  
}

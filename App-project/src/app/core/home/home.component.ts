import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "./css/demo.css", "./css/style4.css"]
})
export class LoggedHomeComponent implements OnInit {
  constructor(private user: AuthService) {
    console.log(this.user);

  }

  ngOnInit() {

  }

  get loggedUser() {
    console.log(this.user);
    
    return this.user.iSLoggedIn
  }
}

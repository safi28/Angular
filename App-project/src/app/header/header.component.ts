import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.isLoggedIn$ = this.authService.login;
  }

  // onLogout() {
  //   this.authService.logout();
  // }
}

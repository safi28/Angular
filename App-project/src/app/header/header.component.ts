import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: FormGroup;

  constructor(
    af: AngularFireAuth,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get isLogged() {
    const user = this.authService.iSLoggedIn;
    if (this.authService.iSLoggedIn) {
    //  this.router.navigate(["/register"]);
      return true;
    }
    return false;
  }

  onLogout() {
    localStorage.removeItem("user");

    this.authService.doLogout();
  }
}

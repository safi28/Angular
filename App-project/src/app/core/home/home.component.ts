import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { UserService } from "src/app/user/user.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class LoggedHomeComponent implements OnInit {
  isLoggedUser: FormGroup;

  constructor(
    af: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedUser = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  // get isLogged() {
  //   if (this.authService.iSLoggedIn) {
  //   // this.router.navigate(["/dashboard"]);
  //     return true;
  //   }
  //   return false;
  // }
}

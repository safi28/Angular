import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
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
    private authService: AuthService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get isLogged() {
    if (this.authService.iSLoggedIn) {
      return true;
    }
    return false;
  }

}

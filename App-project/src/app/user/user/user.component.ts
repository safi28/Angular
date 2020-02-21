import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { AuthService } from "src/app/auth/auth.service";
import { RegisterComponent } from "src/app/authentication/register/register.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  gen: string;
  userForm: FormGroup;
  person: RegisterComponent;
  image: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}


  ngOnInit() {
    this.userForm = this.fb.group({
      male: [""],
      female: [""]
    });
  }

  get currentUser() {
    return this.userService.currentUser;
  }

  onLogout() {
    localStorage.removeItem("user");
    this.authService.doLogout();
  }

}

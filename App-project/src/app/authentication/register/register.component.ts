import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/auth.service";
import * as firebase from "firebase";
import { UserService } from '../user.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css", "../../../errors-message.css"]
})
export class RegisterComponent implements OnInit {
  personGender: string;
  user: any;
  registerForm: FormGroup;
  registerF: FormGroup;
  // username: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private username: UserService
  ) {}
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerF = new FormGroup(
      {
        displayName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        passwordConfirm: new FormControl("", Validators.minLength(6))
      },
      this.passwordMatchValidator
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("passwordConfirm").value
      ? null
      : { mismatch: true };
  }

  setGender(person) {
    if (person == "Male") {
      this.personGender = "Male";
    }

    if (person == "Female") {
      this.personGender = "Female";
    }
  }

  tryRegister(value) {
    this.authService.doRegister(value).then(
      res => {
        this.username = this.registerF.value.displayName;

        var user = firebase.auth().currentUser;

        user
          .updateProfile({
            displayName: this.username.userInfo()
          })
          .catch(function(error) {});
        console.log(res);
        console.log(this.username);

        this.toastr.success("Successfylly registered!", "Success");
        this.router.navigate(["/login"]);
      },
      error => {
        this.toastr.error(error.error, "Error");
      }
    );
  }

  get userData() {
    return this.authService.userData;
  }
}

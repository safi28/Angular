import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css", "../../../errors-message.css"]
})
export class RegisterComponent implements OnInit {
  personGender: string;
  registerForm: FormGroup;
  registerF: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
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

  tryRegister(value) {
    this.authService.doRegister(value).then(
      res => {
        this.toastr.success("Successfylly registered!", "Success");
        this.router.navigate(["/login"]);
      },
      error => {
        try {
          this.toastr.error("Error");
        } catch (e) {}
      }
    );
  }
}

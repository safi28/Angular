import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/auth.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserService } from '../../user/user.service'

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: [
    "./register.component.css",
    "../../../errors-message.css",
  ]
})
export class RegisterComponent implements OnInit {
  personGender: string;
  user: any;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private afs: AngularFirestore,
    private userInfo: UserService
  ) {}
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      displayName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      male: [Boolean, Validators.required],
      female: [Boolean, Validators.required]
    });
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
        this.toastr.success("Successfylly registered!", "Success");
        this.router.navigate(["/login"]);
      },
      error => {
        this.toastr.error(error.error, "Error");
      }
    );
  }

  get userData() {
    // console.log(this.authService.userData);
    console.log(this.registerForm.value);
    

    return this.authService.userData;
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../auth/auth.service";
import {
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { User } from "../models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css", "../../errors-message.css"]
})
export class RegisterComponent implements OnInit {
  personGender: string;
  user: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private afs: AngularFirestore
  ) {}
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      male: [Boolean, Validators.required],
      female: [Boolean, Validators.required]
    });

    
  }

  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   };
  //   return userRef.set(userData, {
  //     merge: true
  //   });
  // }

  setGender(person) {
    if (person == "Male") {
      this.personGender = "Male";
    }

    if (person == "Female") {
      this.personGender = "Female";
    }
  }

  // onFormSubmit() {
  //   this.submitted = true;

  //   if(this.registerForm.invalid) {
  //     return
  //   }

  //   this.loading = true;
  //   this.userService.register(this.registerForm.value).subscribe(data => {
  //     console.log(data);

  //   },error => {
  //     console.log(error);

  //   })
  // }

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
}

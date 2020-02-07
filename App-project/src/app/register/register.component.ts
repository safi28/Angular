import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../_services/user.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css",'../../errors-message.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private authService: AuthService
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
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }



  // onFormSubmit() {
  //   this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.userService.register(this.registerForm.value).subscribe(
  //     data => {
  //       this.toastr.success('Successfully registered!')
  //       this.router.navigate(["/login"]);
        
  //     },
  //     error => {
  //       this.toastr.error(error.error.message, "Error");
  //       this.loading = false;
  //       console.log(this.registerForm.value);
        
  //     }
  //   );
  // }

    // get fval() {
  //   return this.registerForm.controls;
  // }

  onFormSubmit() {
    this.submitted = true;

    if(this.registerForm.invalid) {
      return
    }

    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(data => {
      console.log(data);
      
    },error => {
      console.log(error);
      
    })
  }

  tryRegister(value) {
    this.authService.doRegister(value).then(res => {
      console.log(res);
      this.toastr.success('Successfylly registered!', 'Success')
      this.router.navigate(['/login'])
      
    },
    error => {
      this.toastr.error(error.error.message, 'Error')
    })
    
  }
}

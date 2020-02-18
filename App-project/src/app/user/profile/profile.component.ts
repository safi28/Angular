import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { RegisterComponent } from "src/app/authentication/register/register.component";
import { User } from "src/app/models/user";
import { UserService } from 'src/app/authentication/user.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  username: string
  profile: FormGroup;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.username = this.userService.userInfo()
    console.log(this.username);
    
  }


}

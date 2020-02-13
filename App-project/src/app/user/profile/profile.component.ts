import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: FormGroup
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }
}

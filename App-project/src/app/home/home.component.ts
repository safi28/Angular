import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentUser;
  constructor(private user: AuthService) {
    this.currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''    
   }
  

  ngOnInit() {
  }

  get loggedUser() {
    
    return this.user.iSLoggedIn
  }
 }

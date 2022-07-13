import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/User';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean = false;

  userrr :Subscription;
  userr :User

  constructor(private regService:RegistrationService, private router:Router) { }

  ngOnInit(): void {
    this.userrr = this.regService.user.subscribe((data: User) => {
      console.log(data)
      this.userr = data
      this.isAuthenticated=!this.userr? false : true;
    })
  }

  onLogout(){
    this.regService.logout();
    this.router.navigate(["/login"])
  }

}

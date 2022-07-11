import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegistrationService} from "../registration.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = ""
  password:string = ""

  constructor(private registerService:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const credentials ={
      username:this.username,
      password:this.password
    }
    this.registerService.userLogin(credentials).subscribe(user => {
      console.log(user.id)
      this.router.navigate(["profile/"+ user.id])
    })

  }

}

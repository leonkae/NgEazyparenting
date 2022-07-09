import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from "../signup.service";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string = ""
  password:string = ""
  password2:string = ""
  email:string = ""

  constructor(private signService:SignupService, private router:Router) { }

  ngOnInit(): void {
    };


  onSubmit() {
    const details ={
      username:this.username,
      password:this.password,
      password2:this.password2,
      email:this.email,
    }
    this.signService.userReg(details).subscribe(user => {
      console.log(user)
      this.router.navigate(["/login"])
    })

  }

}
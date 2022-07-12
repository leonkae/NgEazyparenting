import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/models/User';
import { Profile } from 'src/app/models/Profile'
import { RegistrationService } from '../registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  isAuthenticated:boolean = false;
  @Input() user: any;
  username:string = ""
  email:string = ""
  bio:string = ""
  f_name:string = ""
  gender:string = ""
  age:string = ""
  weight:string = ""
  blood_group:string = ""
  image:string = ""
  
  userr :User
  userrr :Subscription
  constructor(private profService:ProfileService,private regService:RegistrationService) { }


  // profiles :Profile[] = []
  profiles:any

  ngOnInit(): void {
    this.userrr = this.regService.user.subscribe((data: User) => {
      console.log(data)
      this.userr = data
      this.isAuthenticated=!this.userr? false : true;
    })
    this.get_profiles()
  }

  get_profiles(){
    const user = JSON.parse(this.regService.getLocalStorage('user'))
    console.log(user)
    this.regService.getCurrentProfile(user.id).subscribe((profiles)=> (console.log(profiles),this.profiles = profiles))
  }
  updateo(){
    this.regService.updateProf(this.profiles)
  }
  onSubmit() {
    const credentials ={
      username:this.username,
      email:this.email,
      bio:this.bio,
      f_name:this.f_name,
      gender:this.gender,
      age:this.age,
      weight:this.weight,
      blood_group:this.blood_group,
      image:this.image,
    }
    this.profService.getProf().subscribe(user => {
      console.log(user)
    })
    this.userrr = this.regService.user.subscribe((data: User) => {
      console.log(data)
      this.userr = data
    })
  }
  ngOnDestroy(){
    this.userrr.unsubscribe()
  }

  onLogout(){
    this.regService.logout();
  }
}
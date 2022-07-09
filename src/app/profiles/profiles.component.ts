import { Component, OnInit } from '@angular/core';
import {Profile} from 'src/app/models/Profile'
import {ProfileService} from 'src/app/profile.service'

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})

export class ProfilesComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  profile: Profile []=[] 

  ngOnInit(): void {
    this.get_profiles()
  }
  get_profiles(){
    this.profileService.getProfiles().subscribe((profile)=> (this.profile = profile))
  }
}

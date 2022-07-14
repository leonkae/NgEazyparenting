import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MedicalhubService } from '../medicalhub.service';
import { Medicalhub } from '../models/Medicalhub';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-medical-hub',
  templateUrl: './medical-hub.component.html',
  styleUrls: ['./medical-hub.component.css'],
  styles: [`
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class MedicalHubComponent implements OnInit {
  closeResult = '';
  // formValue !: FormGroup;
  // medicalHubObj : MedicalHub = new MedicalHub()
  posts: Medicalhub[] = [];
  image!: File;
  description: string = ' ';
  selectedImage!: any;
  username: any;

  constructor(private modalService: NgbModal, private medicalhubService: MedicalhubService, private regService: RegistrationService) {}

  // constructor(private modalService: NgbModal, private formBuilder:FormBuilder, private hubServervice : HubService) {}

  ngOnInit(): void {
    this.medicalhubService
      .getMedical()
      .subscribe((posts) => (this.posts = posts));

      this.getName()
    // this.get_profiles()
  }

  // get_profiles(){
  //   const user = JSON.parse(this.regService.getLocalStorage('user'))
  //   console.log(user)
  //   this.regService.getCurrentProfile(user.id).subscribe((profiles)=> (console.log(profiles),this.profiles = profiles))
  // }

  uploadFile(event: any): void {
    this.selectedImage = event.target.files[0];
  }
  
  getName(){
    this.username= this.regService.getUsername()
    console.log(this.username);
    
  }
 
  onSubmit({ value, valid }: NgForm) {
    const fd = new FormData();
    if (this.selectedImage) {
      fd.append('image', this.selectedImage, this.selectedImage.name);
    }
    fd.append('description', value.description);
    this.medicalhubService
      .postMedical(fd)
      .subscribe((posts) => (console.log(posts), this.posts.unshift(posts)));
    // if (this.posts.length > 10) {
    // }
  }

  open(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModal(addPost){
    this.modalService.open(addPost, {centered:true})
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

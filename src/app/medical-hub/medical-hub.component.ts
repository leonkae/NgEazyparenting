import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup} from '@angular/forms'
import {MedicalHub} from 'src/app/models/MedicalHub'
import { HubService } from './shared/hub.service';

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
  formValue !: FormGroup;
  medicalHubObj : MedicalHub = new MedicalHub()

  constructor(private modalService: NgbModal, private formBuilder:FormBuilder, private hubServervice : HubService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      image : [''],
      caption : ['']
    })
  }

  // ADDING A POST
  addHubPost(){
    this.medicalHubObj.image = this.formValue.value.image;
    this.medicalHubObj.caption = this.formValue.value.caption;

    this.hubServervice.addPost(this.medicalHubObj)
    .subscribe(res=>{
      .console.log(res);
      alert("Post Added Successfully")   
    },
    err=>{
      alert("An error occured!")
    })
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

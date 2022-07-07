import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

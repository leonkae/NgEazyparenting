import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicalhub } from 'src/app/models/Medicalhub';
import { MedicalhubService } from 'src/app/medicalhub.service';

@Component({
  selector: 'app-medicalhub',
  templateUrl: './medicalhub.component.html',
  styleUrls: ['./medicalhub.component.css'],
})
export class MedicalhubComponent implements OnInit {
  posts: Medicalhub[] = [];
  image!: File;
  description: string = ' ';
  selectedImage!: any;

  constructor(private medicalhubService: MedicalhubService) {}

  ngOnInit(): void {
    this.medicalhubService
      .getMedical()
      .subscribe((posts) => (this.posts = posts));
  }

  uploadFile(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  onSubmit({ value, valid }: NgForm) {
    const fd = new FormData();
    if (this.selectedImage) {
      fd.append('image', this.selectedImage, this.selectedImage.name);
    }
    fd.append('description', value.description);
    this.medicalhubService
      .postMedical(fd)
      .subscribe((posts) => this.posts.unshift(posts));
    // if (this.posts.length > 10) {
    // }
  }
}

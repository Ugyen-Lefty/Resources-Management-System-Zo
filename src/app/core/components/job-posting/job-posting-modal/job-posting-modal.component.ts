import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-posting-modal',
  templateUrl: './job-posting-modal.component.html',
  styleUrls: ['./job-posting-modal.component.scss']
})

export class JobPostingModalComponent implements OnInit {

   jobPostingForm!: FormGroup;
   attachment = new FormControl();
     campaignOne!: FormGroup;
  campaignTwo!: FormGroup;

  constructor(private fb: FormBuilder) {

   const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
     }

  ngOnInit(): void {
  this.setForm();
  }

  setForm(): void {
    this.jobPostingForm = this.fb.group({
       title: [''],
       description: [''],
       location: [''],
       cardTitle: [''],
       assignee:['']
    });
  }

  addJobPosting() {
    // console.log(this.jobPostingForm.value);
    debugger
  }

  selectFiles(files: any) {
     this.attachment.setValue(files.files);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  totalJobs: string[] = [];
     jobsControl = new FormControl();


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<JobPostingModalComponent>) {

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
       title: ['', Validators.required],
       description: ['', Validators.required],
       location: ['', Validators.required],
       cardTitle: ['', Validators.required],
       assignee:['', Validators.required]
    });
  }

  addJobPosting() {
  const payload = {
      ...this.jobPostingForm.value,
      image: this.attachment.value,
      startDate: this.campaignOne?.get('start')?.value,
      endDate: this.campaignTwo?.get('end')?.value,
      status: 'posted',
      work_type: this.totalJobs,
      applied: [''],
      recruits: [''],
      //TO BE CHANGED LATER TO DYNAMIC USER ID FROM LOCALSTORAGE
      postedBy: '0uv4r4jLry1UEtW2XAJz'
    }
     this.close(payload);
  }

  selectFiles(files: any) {
     this.attachment.setValue(files.files);
  }

  close(payload?: any){
      this.dialogRef.close(payload);
  }

  addJobs(event: any) {
    this.totalJobs.push(event);
    this.jobsControl.setValue('');
  }
}

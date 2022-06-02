import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
     job: any;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<JobPostingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.job = data || '';
     }

  ngOnInit(): void {
  this.setForm();
  this.jobPostingForm.patchValue(this.job);
  this.totalJobs = this.job?.job_type;
  }

  setForm(): void {
    this.jobPostingForm = this.fb.group({
       title: ['', Validators.required],
       description: ['', Validators.required],
       location: ['', Validators.required],
       start_date: [''],
       end_date: ['']
       });
  }

  addJobPosting() {
  const payload = {
      ...this.jobPostingForm.value,
      image: this.attachment.value,
      status: 'draft',
      creator_id: 3,
      recruits: [''],
      job_type: this.totalJobs,
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

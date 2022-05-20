import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JobPostingModalComponent } from './job-posting-modal/job-posting-modal.component';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  creationModal() {
    this.dialog.open(JobPostingModalComponent, {
       width: '30%',
      autoFocus: false,
    }).afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

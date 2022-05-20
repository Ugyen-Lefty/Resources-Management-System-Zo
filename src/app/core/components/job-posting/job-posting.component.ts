import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JobPostingModalComponent } from './job-posting-modal/job-posting-modal.component';
import { filter } from 'rxjs';

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
    }).afterClosed().pipe(filter(value =>!!value)).subscribe(result => {
          //Call API
    });
  }
}

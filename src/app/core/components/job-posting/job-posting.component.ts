import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobPostingModalComponent } from './job-posting-modal/job-posting-modal.component';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { find } from 'lodash-es';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {

  jobs: any = [];
  completedJobs: any = [];
  postedJobs: any = [];
  reviewJobs: any = [];
  constructor( private dialog: MatDialog, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  this.jobs = [];
     this.getJobs();
  }

  creationModal(job?: any): void {
    this.dialog.open(JobPostingModalComponent, {
       width: '550px',
      autoFocus: false,
      data: job
    }).afterClosed().pipe(filter(value =>!!value)).subscribe(result => {
    if(job){
     this.api.editJob(job.id, result).subscribe( () => {
        Swal.fire('Job updated successfully!', '', 'success');
         this.completedJobs = [];
         this.reviewJobs= [];
          this.postedJobs = [];
        this.getJobs();
        }, () => {
         Swal.fire('Job updating error!', '', 'error');
        });
    } else {
 this.api.postJob(result).subscribe( () => {
        Swal.fire('Job posted successfully!', '', 'success');
         this.completedJobs = [];
         this.reviewJobs= [];
          this.postedJobs = [];
        this.getJobs();
        }, () => {
         Swal.fire('Job posting error!', '', 'error');
        });
    }

    });
  }

   getJobs(): void {
    this.api.getJobs().subscribe( (data: any) => {
    data.forEach( (val : any) => {
        if(val.status === 'completed') {
          this.completedJobs.push(val);
        } else if(val.status === 'posted') {
          this.postedJobs.push(val);
        } else if(val.status === 'draft') {
          this.reviewJobs.push(val);
        }
    })
    });
  }

  deleteJob(job: any): void {
     this.api.delete(job.id).subscribe(() => {
     this.completedJobs = [];
     this.reviewJobs= [];
     this.postedJobs = [];
      this.getJobs();
     })
  }
}

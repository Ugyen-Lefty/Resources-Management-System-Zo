import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobPostingModalComponent } from './job-posting-modal/job-posting-modal.component';
import { filter } from 'rxjs';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2'
import { uniqBy } from 'lodash-es';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {

  jobs: any = [];
  constructor( private dialog: MatDialog, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  this.jobs = [];
     this.getJobs();
  }

  creationModal(): void {
    this.dialog.open(JobPostingModalComponent, {
       width: '30%',
      autoFocus: false,
    }).afterClosed().pipe(filter(value =>!!value)).subscribe(result => {
        this.api.postJob(result);
        Swal.fire('Job posted successfully!', '', 'success');
    });
  }

   getJobs(): void {
     this.api.getAllJobs()
      .pipe(
        filter(res => !!res)
      )
      .subscribe(res => {
        res.forEach((ans: any) => {
        //DYNAMIC USER
          if (ans.postedBy === '0uv4r4jLry1UEtW2XAJz') {
            this.jobs.push(ans);
            this.jobs = uniqBy(this.jobs, 'title');
          }
        });
      });
  }

  deleteJob(job: any): void {
     this.api.delete(job.id).then(res => {
     this.jobs = [];
      this.getJobs();
     })
  }
}

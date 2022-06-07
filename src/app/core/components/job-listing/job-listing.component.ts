import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {

   postedJobs: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
     this.api.getAllJobs().subscribe( res => {
         this.postedJobs = res;
     })
  }

}

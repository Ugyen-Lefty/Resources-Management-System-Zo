import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent implements OnInit {

  currentUser: any;
  role: any;
  dashboard: any= '';
  requestedCard: any[] = [];
  appliedCard: any[] = [];
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute)  { }

  ngOnInit(): void {
    this.role = localStorage.getItem('User Role');
    this.getRequestList();
    this.api.getUser().subscribe(res => this.currentUser = res);
    if (this.role === 'Buyer') {
      this.api.getBuyerDashBoard().subscribe((res: any) => {
        this.dashboard = res;
      });
    } else {
      this.api.getWorkerDashBoard().subscribe((res: any) => {
        this.dashboard = res;
      });
    }
  }

  private getRequestList() {
  if(this.role !== 'Buyer'){
   this.api.getRequestList().subscribe((res: any) => {
      this.requestedCard = res;
    })
  } else {
  this.api.getAppliedList().subscribe((res: any) => {
      this.appliedCard = res;
    })
  }
  }

  openCard(user: any) {
    this.router.navigate([`job/${user.job_id}/card-details/${user.card_id}`], {relativeTo: this.route.parent});
  }

  acceptRequest(user: any) {
    this.api.acceptRequest(user).subscribe((res: any) => {
    Swal.fire(
            'Job successfully approved!',
            '',
            'success'
          )
      this.ngOnInit();
    });
  }

  showTalentDetails(user: any) {
    this.router.navigate([`worker/${user.worker_id}`], {relativeTo: this.route.parent});
  }
}

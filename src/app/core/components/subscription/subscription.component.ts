import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';
import { SubscriptionModalComponent } from './subscription-modal/subscription-modal.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  isPremium!: any;
  currentUser!: any;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.api.getUser().subscribe((res: any) => {
      this.currentUser = res;
      this.isPremium = res.subscribed;
    });
  }

  premium() {
    this.dialog.open(SubscriptionModalComponent, {
      width: '600px',
      // data: { id: this.jobId, card: this.cardDetails },
      autoFocus: false
    });
    // this.api.postCard(result, this.jobId, this.cardDetails.id).subscribe((res: any) => {
    //   Swal.fire('Card successfully Changed!', '', 'success');
    //   this.getCardDetail();
    // });
    // Swal.fire({
    //   title: 'Are you sure',
    //   text: "You want to subscribe to premium?",
    //   icon: 'question',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Your request is underway',
    //       'We will get back to you',
    //       'success'
    //     )
    //   }
    // })
  }

  downgrade() {
    Swal.fire({
      title: 'Are you sure',
      text: "You want to unsubscribe?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.downgrade({ ...this.currentUser, subscribed: false }).subscribe(() => {
          Swal.fire(
            'You have been Unsubscribed',
            '',
            'success'
          )
        });
      }
    })
  }

}

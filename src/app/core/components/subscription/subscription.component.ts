import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { SubscriptionModalComponent } from './subscription-modal/subscription-modal.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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

}

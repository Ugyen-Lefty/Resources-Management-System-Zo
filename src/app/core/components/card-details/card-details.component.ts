import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CardCreationComponent } from '../post-details/card-creation/card-creation.component';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';
import { NegotiationComponent } from './negotiation/negotiation.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardId: any;
  jobId: any;
  cardDetails: any;
  role: any;
  user: any;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.cardId = this.route.snapshot.params['cid'];
    this.jobId = this.route.snapshot.params['jid'];
    this.getCardDetail();
    this.role = localStorage.getItem('User Role');
     this.user = JSON.parse(localStorage.getItem('current user') || '');
  }

  editCard() {
    this.dialog.open(CardCreationComponent, {
      width: '600px',
      data: {id : this.jobId, card: this.cardDetails},
       autoFocus: false
    }).afterClosed().pipe(filter(val => !!val)).subscribe(result => {
       this.api.postCard(result, this.jobId, this.cardDetails.id).subscribe( (res: any) => {
       Swal.fire('Card successfully Changed!', '', 'success');
        this.getCardDetail();
    });
  })
  }

  deleteCard() {
    Swal.fire({
      title: 'Are you sure',
      text: "You want to Delete this Card?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Card',
          'deleted Successfully',
          'success'
        ).then((res) => {
          if (res.isConfirmed) {
            this.api.deleteCard(this.jobId, this.cardId).subscribe((res: any) => {
              this.goBack();
            });
          }
        });
      }
    })
  }

  goBack() {
    window.history.back();
  }

  private getCardDetail(): void {
    this.api.getCardDetail(this.cardId, this.jobId).subscribe( res => {
      this.cardDetails = res;
    }
    );
  }

  Apply() {
    const payload = {
      card_id: this.cardId,
      worker_ids: [this.user.id],
      buyer_id: ''
    };
    this.api.workerApply(payload).subscribe((res: any) => {
      Swal.fire('Successfully applied to card!', '', 'success');
    });
  }

  negotiate() {
    this.dialog.open(NegotiationComponent, {
      width: '600px',
      data: this.cardDetails || '',
      autoFocus: false
    }).afterClosed().subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CardCreationComponent } from '../post-details/card-creation/card-creation.component';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardId: any;
  jobId: any;
  cardDetails: any;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.cardId = this.route.snapshot.params['cid'];
    this.jobId = this.route.snapshot.params['jid'];
    this.getCardDetail();
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
    this.api.deleteCard(this.jobId, this.cardId).subscribe( (res: any) => {
    Swal.fire('Card successfully deleted!', '', 'success');
     this.goBack();
    });
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
}

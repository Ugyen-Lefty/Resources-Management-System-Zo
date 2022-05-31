import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CardCreationComponent } from '../post-details/card-creation/card-creation.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardId: any;
  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cardId = this.route.snapshot.params['id'];
  }

  editCard() {
    this.dialog.open(CardCreationComponent, {
      width: '600px',
      data: this.cardId,
       autoFocus: false
    }).afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  deleteCard() {
    alert('delete this card');
  }

  goBack() {
    window.history.back();
  }
}

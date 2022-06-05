import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bookmarked-selected',
  templateUrl: './bookmarked-selected.component.html',
  styleUrls: ['./bookmarked-selected.component.scss']
})
export class BookmarkedSelectedComponent implements OnInit {

  bookmarkedTalentLists: any[] = [];
  selectedLists: any[] = [];
  card_id: any;
  constructor(private api: ApiService,  public dialogRef: MatDialogRef<BookmarkedSelectedComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
     this.card_id = data;
   }

  ngOnInit(): void {
   this.api.getBookmarkedList('3').subscribe((res: any) => {
        this.bookmarkedTalentLists = res;
      })
  }

  selectGroup(checked: any, user: any) {
     if(checked){
      this.selectedLists.push(user);
     } else {
      const data = this.selectedLists.filter(data => data.id != user.id);
      this.selectedLists = data;
     }
  }

  selectedCheck(id: string) {
     return this.selectedLists.some(res => res.id === id);
  }

  addSendResquest() {
    const payload = {
      card_id: this.card_id,
      worker_ids: this.selectedLists.map(data => data.user.id),
      buyer_id: '3'
    };
     this.api.workerSendRequest(payload).subscribe((res: any) => {
       debugger
     });
  }
}

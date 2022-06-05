import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-bookmarked-selected',
  templateUrl: './bookmarked-selected.component.html',
  styleUrls: ['./bookmarked-selected.component.scss']
})
export class BookmarkedSelectedComponent implements OnInit {

  bookmarkedTalentLists: any[] = [];
  selectedLists: any[] = [];

  constructor(private api: ApiService) { }

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
    // const payload = {
    //   card_id:
    // };
    //  this.api.workerSendRequest().subscribe((res: any) => {
    //    debugger
    //  });
  }
}

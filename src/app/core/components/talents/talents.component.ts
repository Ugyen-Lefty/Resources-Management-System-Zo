import { Component, OnInit } from '@angular/core';
import { find } from 'lodash-es';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { TalentDetailsComponent } from './talent-details/talent-details.component';

@Component({
    selector: 'app-talents',
    templateUrl: './talents.component.html',
    styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {

    talentLists: any = [];
    bookmarkedTalentLists: any = [];
    userId = localStorage.getItem('user_id') || '';

    constructor(private api: ApiService, private dialog: MatDialog)  { }

    ngOnInit(): void {
        this.initializer();
    }

    initializer(): void {
      this.api.getWorkerlists().subscribe((res: any) => {
        this.talentLists = res;
      });
      //NOTE -- User ID should be dynamic
      // this.api.getUser().subscribe( res => {
      // })
      this.api.getBookmarkedList('3').subscribe(res => {
        this.bookmarkedTalentLists = res;
      })

    }

    showDetails(list: any) {

    }

  setBookmarked(id: string) {
     //NOTE -- User ID should be dynamic
     this.api.setBookmarkMark(this.userId, id).subscribe(() => {
        Swal.fire('Talent bookmarked successfully!', '', 'success');
        this.initializer();
      })
  }

  isBookmarked(list: any) {
     return this.bookmarkedTalentLists.some((res: any) => res.user.id === list.user.id);
  }

  removeBookmarked(id: string){
  this.api.removeBookMark(this.userId, id).subscribe( (res: any) => {
     Swal.fire('Removed bookmarked successfully!', '', 'success');
        this.initializer();
    });
  }

 openDetails(worker: any){
     this.dialog.open( TalentDetailsComponent, {
       width: '550px',
      autoFocus: false,
      data: worker
     }).afterClosed().subscribe( res => {

     })
 }

}

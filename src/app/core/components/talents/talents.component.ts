import { Component, OnInit } from '@angular/core';
import { find } from 'lodash-es';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { TalentDetailsComponent } from './talent-details/talent-details.component';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-talents',
    templateUrl: './talents.component.html',
    styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {

    talentLists: any = [];
    bookmarkedTalentLists: any = [];
    userId = JSON.parse(localStorage.getItem('current user') || '');

    constructor(private api: ApiService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute)  { }

    ngOnInit(): void {
        this.initializer();
    }

    initializer(): void {
      this.api.getWorkerlists().subscribe((res: any) => {
        this.talentLists = res;
      });
      this.api.getBookmarkedList(this.userId.id).subscribe(res => {
        this.bookmarkedTalentLists = res;
      })

    }

    showDetails(list: any) {

    }

  setBookmarked(id: string) {
     this.api.setBookmarkMark(this.userId.id, id).subscribe(() => {
        Swal.fire('Talent bookmarked successfully!', '', 'success');
        this.initializer();
      })
  }

  isBookmarked(list: any) {
     return this.bookmarkedTalentLists.some((res: any) => res.user.id === list.user.id);
  }

  removeBookmarked(id: string){
  this.api.removeBookMark(this.userId.id, id).subscribe( (res: any) => {
     Swal.fire('Removed bookmarked successfully!', '', 'success');
        this.initializer();
    });
  }

 openDetails(worker: any) {
   this.router.navigate(['worker/', worker.id] ,{relativeTo: this.route.parent});
 }
}

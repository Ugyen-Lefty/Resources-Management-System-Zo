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
    professionalLists = [{
      name: 'Jigme Samdrup',
      phone: '+975 17772273',
      profession: 'Plumber',
      rate: 'Nu. 1000',
      profile: 'https://t4.ftcdn.net/jpg/04/12/12/17/360_F_412121765_RC0Mxc2diWwWyOEwwF66SeNLerSe3KXK.jpg',
      available: false,
    },
    {
      name: 'Sonam',
      phone: '+975 172734',
      profession: 'Carpenter',
      rate: 'Nu. 760',
       profile: 'https://media.istockphoto.com/photos/handsome-young-man-isolated-on-gray-background-dressed-in-casual-blue-picture-id1045886754?k=20&m=1045886754&s=170667a&w=0&h=pruezt3Ec0iPDtR7I180rz_491M-hPQaZVlOZjL_PEE=',
      available: true
      },
      {
      name: 'Tashi',
      phone: '+975 17722738',
      profession: 'Painter',
      rate: 'Nu. 769',
       profile: 'https://t1.thpservices.com/previewimage/gallil/13eabf3e1a1706a68b9b0c4811f02d34/cie-412-52854.jpg',
      available: false
      },
      {
      name: 'Tshering',
      phone: '+975 17743273',
      profession: 'Electrician',
      rate: 'Nu. 980',
       profile: 'https://us.123rf.com/450wm/mangostar/mangostar1905/mangostar190500409/121992895-positive-successful-photographer-enjoying-photo-shooting-outdoors-young-woman-in-casual-holding-phot.jpg?ver=6',
      available: true
      }
    ]

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

  applyNow() {
     Swal.fire('Request Sent', 'We will get back to you soon', 'success');
  }
}

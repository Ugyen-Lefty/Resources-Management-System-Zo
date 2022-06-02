import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { distinctUntilChanged, filter } from 'rxjs';
import { uniqBy } from 'lodash-es';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CardCreationComponent } from './card-creation/card-creation.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

   id: string = '';
   post: any = '';
   cards!: any[];

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
   this.route.paramMap.pipe(distinctUntilChanged()).subscribe(paramMap => {
            if (paramMap.get('id')) {
                this.id = paramMap.get('id') as string;
            }
        })
       this.getJobs();
       this.getCards();
  }

   getJobs(): void {
     this.api.getJobs(this.id).subscribe( (res: any) => {
       this.post = res;
     })
  }

  goBack() {
    window.history.back();
  }

  cardCreation() {
     this.dialog.open(CardCreationComponent, {
      width: '600px',
      data: this.id,
       autoFocus: false
  }).afterClosed().pipe(filter( value => !!value)).subscribe(res => {
        this.api.postCard(res);
        this.getCards();
  });
  }

  private getCards() {
    this.api.getCards().subscribe( res => {
        this.cards = res;
    })
  }

  showCardDetails(id: any) {
    this.router.navigate(['card-details', id], {relativeTo: this.route.parent});
  }

  postJob(type: string) {
    this.api.updateJob(type, this.id).subscribe( () => {
       Swal.fire('Job Status successfully Changed!', '', 'success');
    });
  }
}

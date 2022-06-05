import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkedSelectedComponent } from './bookmarked-selected/bookmarked-selected.component';

@Component({
  selector: 'app-talent-visibility',
  templateUrl: './talent-visibility.component.html',
  styleUrls: ['./talent-visibility.component.scss']
})
export class TalentVisibilityComponent implements OnInit {

  @Input() card_id: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
   this.dialog.open(BookmarkedSelectedComponent, {
     width: '30%',
      autoFocus: false,
      data: this.card_id
   }).afterClosed().subscribe( res => {

   })
  }
}

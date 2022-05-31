import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editProfile() {
   this.dialog.open(UserProfileModalComponent, {
    width: '550px',
    autoFocus: false,
   }).afterClosed().pipe(filter( value => !!value)).subscribe( value => {
   })
  }
}

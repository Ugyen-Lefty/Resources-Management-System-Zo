import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TalkService } from '../../../services/talk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talent-details',
  templateUrl: './talent-details.component.html',
  styleUrls: ['./talent-details.component.scss']
})
export class TalentDetailsComponent implements OnInit {

  workerDetails: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<TalentDetailsComponent>,
  private talkService: TalkService, private router: Router) {
     this.workerDetails = data;
  }

  ngOnInit(): void {

  }

  openChat() {
  this.dialogRef.close();
    this.talkService.otherApplicationUser = {
      id: this.workerDetails.user.id,
      username: this.workerDetails.user.name,
      email: this.workerDetails.user.email,
      photoUrl: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
      welcomeMessage: 'Hey there! How are you? :-)',
      role: this.workerDetails.user.roles
    }
    this.router.navigate(['core/chats']);
  }
}

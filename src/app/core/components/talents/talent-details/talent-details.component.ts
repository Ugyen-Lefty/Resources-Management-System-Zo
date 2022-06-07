import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalkService } from '../../../services/talk.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-talent-details',
  templateUrl: './talent-details.component.html',
  styleUrls: ['./talent-details.component.scss']
})
export class TalentDetailsComponent implements OnInit {

  workerDetails: any;
  id: any;
  constructor(private talkService: TalkService, private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit(): void {
   this.route.paramMap.subscribe(paramMap => {
            if (paramMap.get('id')) {
                this.id = paramMap.get('id') as string;
            }
        })
        this.api.getWorkersDetails(this.id).subscribe(data => {
          this.workerDetails = data;
        })
  }

  openChat() {
    // this.dialogRef.close();
    //   this.talkService.otherApplicationUser = {
    //     id: this.workerDetails.user.id,
    //     username: this.workerDetails.user.name,
    //     email: this.workerDetails.user.email,
    //     photoUrl: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
    //     welcomeMessage: 'Hey there! How are you? :-)',
    //     role: this.workerDetails.user.roles
    //   }
    //   this.router.navigate(['core/chats']);
    // }
  }
}

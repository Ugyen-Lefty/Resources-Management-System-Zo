import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Talk from 'talkjs';
import { TalkService } from '../../services/talk.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  private inbox!: Talk.Inbox;
  private session!: Talk.Session;
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  constructor(private talkService: TalkService, private api: ApiService) {
  }

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox?.mount(this.talkjsContainer?.nativeElement);
  }
}

import { Injectable } from '@angular/core';
import Talk from 'talkjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
 currentUser!: Talk.User;
  otherApplicationUser = {
      id: 1,
      username: 'Lalit Pokhrel',
      email: 'Lalit Pokhrel',
      photoUrl: 'https://testasmpublic-14e65.kxcdn.com/1653235566_6e861319fbc9abe3cb513888a90479_lalit.jpeg',
      welcomeMessage: 'Hey there! How are you? :-)',
      role: 'default'
    };

  constructor() { }

  async createUser(applicationUser: any) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
      photoUrl: applicationUser.photoUrl,
      role: applicationUser.role
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    const userObject = JSON.parse(localStorage.getItem('current user') || '');
    const user = {
       id: userObject?.id,
      username: userObject?.name,
      email: userObject?.email,
      photoUrl: 'https://testasmpublic-14e65.kxcdn.com/1653235881_0aa0c9d755ac1ee2bc7f4ca453d588_JJ.jpeg',
      welcomeMessage: 'Hey, how can I help?',
      role: userObject?.roles
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: 'tnCEBRGF',
         me: this.currentUser
    });
    return session;
  }

  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }

  async createInbox(session: Talk.Session) {
    const conversation = await this.getOrCreateConversation(session, this.otherApplicationUser);
    const inbox = session.createInbox();
    inbox.select(conversation);
    return inbox;
 }
}

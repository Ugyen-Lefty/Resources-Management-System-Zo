import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  onTrigger = new Subject<void>();
  jobCollection: AngularFirestoreCollection<any>;
  endPoints: any;

  constructor(private fireStore: AngularFirestore, private db: AngularFireDatabase, private storage: AngularFireStorage, private http: HttpClient) {
    this.jobCollection = fireStore.collection<any>('job');
    this.endPoints = `https://hackathon-layog.herokuapp.com/`;
  }

  getCurrentUser() {
  const payload = {
     email: 'sc1@selise.ch',
     password: 'Selise123'
  }
    return this.http.post(`${this.endPoints}`,{user: payload});
  }

  getUsersList() {
    return this.fireStore.collection('users').valueChanges({ idField: 'id' });
  }

  postJob(result: any) {
    return this.http.post(`${this.endPoints}jobs`,{job: result});
  }

  getJobs(id?: string){
  if(id){
   return this.http.get(`${this.endPoints}jobs/${id}`);
  } else {
  return this.http.get(`${this.endPoints}jobs`);
  }
  }

  getAllJobs() {
    return this.fireStore.collection('job').valueChanges({ idField: 'id' });
  }

  triggerReload(): void {
    this.onTrigger.next();
  }

  onReload() {
    return this.onTrigger.asObservable();
  }

  delete(id: string) {
    return this.http.delete(`${this.endPoints}jobs/${id}`);
  }

  postCard(result: any, id?: any, card_id?: string ) {
  if(card_id){
  return this.http.put(`${this.endPoints}jobs/${id}/cards/${card_id}`, {card: result});
  } else {
  return this.http.post(`${this.endPoints}jobs/${id}/cards`, {card: result});
  }

  }

  getCards(id?: string) {
    return this.http.get(`${this.endPoints}jobs/${id}/cards`);
  }

  updateCardStatus(id: any, status: any) {
    this.fireStore.collection('work-progress').doc(id).update({
      status: status
    });
  }

  signin(user: any) {
    return this.http.post(`${this.endPoints}users/sign_in`, { user });
  }

  signup(user: any) {
    return this.http.post(`${this.endPoints}users`, { user });
  }

  updateJob(type: string, id: string) {
    return this.http.put(`${this.endPoints}jobs/${id}`, {status: type});
  }

  editJob(id: string, payload: any) {
    return this.http.put(`${this.endPoints}jobs/${id}`, {job: payload});
  }

  getCardDetail(cardId: any, jobId: any) {
    return this.http.get(`${this.endPoints}jobs/${jobId}/cards/${cardId}`);
  }

  deleteCard(jobId: any, cardId: any) {
    return this.http.delete(`${this.endPoints}jobs/${jobId}/cards/${cardId}`);
  }
}

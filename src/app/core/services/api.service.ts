import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { of, Subject, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    return this.http.post(`${this.endPoints}`,{user: payload}, {withCredentials: true});
  }

  getWorkerlists() {
     return this.http.get(`${this.endPoints}workers`, {withCredentials: true});
  }

  postJob(result: any) {
    return this.http.post(`${this.endPoints}jobs`,{job: result}, {withCredentials: true});
  }

  getJobs(id?: string){
  if(id){
   return this.http.get(`${this.endPoints}jobs/${id}`, {withCredentials: true});
  } else {
  return this.http.get(`${this.endPoints}jobs`, {withCredentials: true});
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
    return this.http.delete(`${this.endPoints}jobs/${id}`, {withCredentials: true});
  }

  postCard(result: any, id?: any, card_id?: string ) {
  if(card_id){
  return this.http.put(`${this.endPoints}jobs/${id}/cards/${card_id}`, {card: result}, {withCredentials: true});
  } else {
  return this.http.post(`${this.endPoints}jobs/${id}/cards`, {card: result}, {withCredentials: true});
   }
  }

  getCards(id?: string) {
    return this.http.get(`${this.endPoints}jobs/${id}/cards`, {withCredentials: true});
  }

  updateCardStatus(id: any, status: any, job_id?: any) {
    return this.getCardDetail(id, job_id).pipe( switchMap(res => {
      const payload = {
        ...res,
        status: status
      }
       return this.http.put(`${this.endPoints}jobs/${job_id}/cards/${id}`, {card: payload}, {withCredentials: true});
    } ))
  }

  signin(user: any) {
    return this.http.post(`${this.endPoints}users/sign_in`, { user }, {withCredentials: true});
  }

  signup(user: any) {
    return this.http.post(`${this.endPoints}users`, { user }, {withCredentials: true});
  }

  updateJob(type: string, id: string) {
    return this.http.put(`${this.endPoints}jobs/${id}`, {status: type}, {withCredentials: true});
  }

  editJob(id: string, payload: any) {
    return this.http.put(`${this.endPoints}jobs/${id}`, {job: payload}, {withCredentials: true});
  }

  getCardDetail(cardId: any, jobId: any) {
    return this.http.get(`${this.endPoints}jobs/${jobId}/cards/${cardId}`, {withCredentials: true});
  }

  deleteCard(jobId: any, cardId: any) {
    return this.http.delete(`${this.endPoints}jobs/${jobId}/cards/${cardId}`, {withCredentials: true});
  }

  signOut() {
    return this.http.delete(`${this.endPoints}users/sign_out`, {withCredentials: true});
  }

  getBookmarkedList(id: string) {
     return this.http.get(`${this.endPoints}${id}/workers`, {withCredentials: true});
  }

  // getUser(){
  //     return this.http.get(`${this.endPoints}current_user`);
  // }

  setBookmarkMark(id: string, worker_id: string){
  const payload = {
       user_id: id,
        worker_profile_id: worker_id
  }
  return this.http.post(`${this.endPoints}workers/bookmarked`, {worker: payload}, {withCredentials: true} );
  }

  removeBookMark(id: string, worker_id: string) {
    return this.http.delete(`${this.endPoints}workers/${id}/${worker_id}`, {withCredentials: true});
  }

  workerSendRequest(payload: { worker_ids: any[]; buyer_id: string; card_id: any }) {
    const data = {
         card_id : payload.card_id,
        worker_ids: payload.worker_ids,
        status: 'invited',
        applied_type: 'requested'
    }
     return this.http.post(`${this.endPoints}card/apply`, {apply: data}, {withCredentials: true} );
  }

  getUser() {
    return this.http.get(`${this.endPoints}current_user`, {withCredentials: true});
  }

  getRequestedAssignee() {
    return this.http.get(`${this.endPoints}card/requested_jobs`, {withCredentials: true});
  }
}

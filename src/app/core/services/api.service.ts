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

  getUsersList() {
    return this.fireStore.collection('users').valueChanges({ idField: 'id' });
  }

  postJob(result: any) {
    this.jobCollection.add(result);
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
    return this.jobCollection.doc(id).delete();
  }

  postCard(result: any) {
    return this.fireStore.collection('work-progress').add(result);
  }

  getCards() {
    return this.fireStore.collection('work-progress').valueChanges({ idField: 'id' });
  }

  updateCardStatus(id: any, status: any) {
    this.fireStore.collection('work-progress').doc(id).update({
      status: status
    });
  }
  
  signin(user: any) {
    return this.http.post(`${this.endPoints}users/sign_in`, { user });
  }

}

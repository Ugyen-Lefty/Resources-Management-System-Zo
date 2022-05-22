import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jobCollection: AngularFirestoreCollection<any>;

  constructor(private fireStore: AngularFirestore, private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.jobCollection = fireStore.collection<any>('job');
  }

  getUsersList() {
    return this.fireStore.collection('users').valueChanges({ idField: 'id' });
  }

  postJob(result: any) {
    this.jobCollection.add(result);
  }

}

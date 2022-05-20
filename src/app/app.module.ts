import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

const firebaseConfig = {
  apiKey: "AIzaSyDagZxR2jxDyi9aYnhzzE9lEp9ZhLJbPII",
  authDomain: "hk22-47b7d.firebaseapp.com",
  projectId: "hk22-47b7d",
  storageBucket: "hk22-47b7d.appspot.com",
  messagingSenderId: "545847144182",
  appId: "1:545847144182:web:1edf9e8512e5d0e21b86d7",
  measurementId: "G-B3JKN38CKN"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

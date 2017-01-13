import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCloX7T9RlwDMRq_9_0R9SEm5RZ0vSpLug',
  authDomain: 'businesscontacts-aaa60.firebaseapp.com',
  databaseURL: 'https://businesscontacts-aaa60.firebaseio.com',
  storageBucket: 'businesscontacts-aaa60.appspot.com',
  messagingSenderId: '316378907212'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

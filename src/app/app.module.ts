import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAbuZHPahBBwjt8V1VvT5ndrOE0Pevpxb0",
      authDomain: "my-project-1500925366254.firebaseapp.com",
      databaseURL: "https://my-project-1500925366254.firebaseio.com",
      projectId: "my-project-1500925366254",
      storageBucket: "my-project-1500925366254.appspot.com"
    }),
    AngularFireStorageModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

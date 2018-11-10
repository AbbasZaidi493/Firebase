import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url: String = environment.serverUrl

  constructor(public http: HttpClient, public afAuth: AngularFireAuth) { }

  login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  SignUp(user) {
    return this.http.post(this.url + '/createuser', user);
  }

  getAllUsers(Token) {

    return this.http.post(this.url + '/getallusers', { nextPageToken: Token });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url: String = environment.serverUrl

  constructor(public http: HttpClient) { }

  login(user) {
    return this.http.get(user);
  }

  SignUp(user) {
    return this.http.post(user, this.url + '/createuser');
  }
}

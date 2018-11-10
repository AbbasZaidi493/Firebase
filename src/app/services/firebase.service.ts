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
    return this.http.post(this.url + '/login', user);
  }

  SignUp(user) {
    return this.http.post(this.url + '/createuser', user);
  }

  getAllUsers() {
    return this.http.get(this.url + '/getallusers');
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  error = "";

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    this.error = ''
    this.firebaseService.login(this.user).then(res => {
      this.router.navigateByUrl('locations');
    }).catch(err => {
      this.error = err.message;
      console.log(err);
    })
  }
}

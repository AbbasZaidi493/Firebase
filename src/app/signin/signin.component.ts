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
  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    this.firebaseService.login(this.user).subscribe(res => {
      this.router.navigateByUrl('locations');
    },
      err => {
        console.log(err);
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit() {
    this.firebaseService.getAllUsers().subscribe(res => {
      if(res) {
        this.users = res;
        console.log(this.users);
      }      
    },
      err => {
        console.log(err);
      })
  }


}

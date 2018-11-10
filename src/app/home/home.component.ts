import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any = [];
  name: string;
  tokenArray = [];
  Token: any;
  index = -1;
  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit() {
    this.GetUsers('');
  }
  GetUsers(token) {
    debugger
    this.firebaseService.getAllUsers(token).subscribe((res: any) => {
      if (res) {
        this.users = res.allUsers;
        if (res.pageToken) {
          this.tokenArray.push(res.pageToken);
        }
        console.log(this.tokenArray);
      }
    },
      err => {
        console.log(err);
      })
  }
  GetPrevious() {
    this.index = this.index - 1
    this.GetUsers(this.tokenArray[this.index]);
  }
  GetNext() {
    this.index = this.index + 1
    this.GetUsers(this.tokenArray[this.index]);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private afStorage: AngularFireStorage, public firebaseService: FirebaseService) { }
  user: any = {};
  error = "";
  active;
  success = "";
  ngOnInit() {
    this.success = "";
    this.error = "";
  }

  upload(event) {
    if (event.target.files[0]) {
      this.active = false;
      // create a random id
      const randomId = Math.random().toString(36).substring(2);
      // create a reference to the storage bucket location
      var ref = this.afStorage.ref(randomId);
      // the put method creates an AngularFireUploadTask
      // and kicks off the upload
      ref.put(event.target.files[0]).then(res => {
        ref.getDownloadURL().subscribe(url => {
          this.active = true;
          this.user.photoURL = url;
        })
      })
    }
  }
  SignUp() {
    this.success = "";
    this.error = "";
    this.firebaseService.SignUp(this.user).subscribe(res => {
      console.log(res);
      this.success = "Sign up Successfully"
    },
      err => {
        this.error = err.error.message;
        console.log(err);
      })
  }
}
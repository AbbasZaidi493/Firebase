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
  user: any = {}
  ngOnInit() {
  }

  upload(event) {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    var ref = this.afStorage.ref(randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    debugger;

    var task = ref.put(event.target.files[0]).then(res => {
      ref.getDownloadURL().subscribe(url => {
        this.user.url = url
      });
    });

  }
  SignUp(user) {
    this.firebaseService.SignUp(user).subscribe(res => {
      console.log(res);
    })
  }
}
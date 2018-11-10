import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app'

export interface Location { 
  geo: any;
  image: string;
  name: string;
 }

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {
  private locationsCollection: AngularFirestoreCollection<Location>;
  locations: Observable<Location[]>;
  locationData = '';
  location: any = {};
  allLocations : any = [];
  lat = '';
  long = '';
  yourData: any;

  
  constructor(private afs: AngularFirestore) { 
    this.location.geo = {};
    this.location.name = '';
    this.location.image = '';    
  }

  ngOnInit() {
    this.afs.collection("locations").snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })).subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.allLocations.push(doc);
        });
        console.log(this.allLocations);
    });
  }

  addLocation(location: Location) {
    // this.locationsCollection = this.afs.collection<Location>('locations');
    // this.locations = this.locationsCollection.valueChanges(); 
    // this.locationData =  new firebase.firestore.GeoPoint(this.lat, this.long);
    // this.location.geo = this.locationData;
    // this.locationsCollection.add(location);
  }
}

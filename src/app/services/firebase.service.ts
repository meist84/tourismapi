import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  
  listing: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }
  
  getListings(){
      this.listing = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
      return this.listing
  }

}

interface Listing{
    key?:string;
    title?:string;
    type?:string;
    image?:string;
    city?:string;
    owner?:string;
    bedrooms?:string;
}
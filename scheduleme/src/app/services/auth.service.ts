import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private fbauth : AngularFireAuth) 
  {

  }
  loginGoogle()
  {
    var gprovider=new firebase.auth.GoogleAuthProvider();
    return this.fbauth.auth.signInWithPopup(gprovider);
  }
  logout()
  {
    this.fbauth.auth.signOut();
  }

}

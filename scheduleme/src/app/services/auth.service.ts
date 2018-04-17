import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  private user : firebase.User = null;
  hasUser = false; 
  constructor(private fbauth : AngularFireAuth) 
  {

  }
  loginGoogle()
  {
    var gprovider=new firebase.auth.GoogleAuthProvider();
    this.hasUser=true;
    return this.fbauth.auth.signInWithPopup(gprovider);
  }
  logout()
  {
    this.hasUser=false;
    this.fbauth.auth.signOut();
  }
  loggedIn()
  {
    return this.hasUser;
  }
}

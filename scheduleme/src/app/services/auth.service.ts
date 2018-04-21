import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  private user : firebase.User = null;
  private hasUser: boolean = false;
  constructor(private fbauth : AngularFireAuth)
  {

  }
  getuid()
  {
    if(this.hasUser) {
      return this.user.uid;
    } else {
      return 0;
    }
  }
  loginGoogle()
  {
    var gprovider=new firebase.auth.GoogleAuthProvider();
    this.hasUser=true;
    return this.fbauth.auth.signInWithPopup(gprovider).then( (res) => {
      this.user = res.user;
      return res;
    });

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

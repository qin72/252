import { Injectable } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router,CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(public authS : AuthService, private router : Router) { }
  CanActivate()
  {
    if(this.authS.loggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigateByUrl('');     
       return false;
    }
  }
}

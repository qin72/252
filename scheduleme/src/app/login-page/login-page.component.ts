import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public authS : AuthService, private router : Router) { }

  ngOnInit() {
  }
  login()
  {
    this.authS.loginGoogle().then( () =>{ 
    
      this.router.navigateByUrl(''); 
  
    });
  }

}

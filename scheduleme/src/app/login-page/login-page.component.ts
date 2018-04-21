import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { NgStyle } from '@angular/common';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user:any;
  constructor(public authS : AuthService, private router : Router) { }

  ngOnInit() {
  }
  login()
  {
    this.authS.loginGoogle().then( (res) =>{

      this.router.navigateByUrl('home');
      console.log(res.user.email);
      this.user=res.user.email;
    });

  }

}

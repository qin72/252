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
  count: number = 0;
  constructor(public authS : AuthService, private router : Router) { }

  ngOnInit() {
  }
  login()
  {
    this.authS.loginGoogle().then( (res) =>{

      this.router.navigateByUrl('home');

    });

  }


  go() {

    if (document.getElementById("fullpage").classList.contains("night")) {
      document.getElementById("fullpage").classList.remove("night");
      document.getElementById("switch").classList.remove("switched");
    }
    else {
      document.getElementById("fullpage").classList.add("night");
        document.getElementById("switch").classList.add("switched");
    }
    if(this.count >= 3) {
      this.login();
    } else { this.count++;}
  }

}

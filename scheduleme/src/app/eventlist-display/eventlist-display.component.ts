import { Component, OnInit, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { HostListener } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { EventManipulationService } from '../services/event-manipulation.service';
import { Subscription } from 'rxjs/Subscription';
import { MatButtonModule } from '@angular/material';
import { EventManipulationDialogsComponent } from '../event-manipulation-dialogs/event-manipulation-dialogs.component';
import { NgClass } from '@angular/common';
import {MatSnackBar} from '@angular/material';


import { Event } from '../objects/event';

@Component({
  selector: 'app-eventlist-display',
  templateUrl: './eventlist-display.component.html',
  styleUrls: ['./eventlist-display.component.css']
})
export class EventlistDisplayComponent implements OnInit {
  innerWidth: number;
  db: any;
  authS:any;
  eMan : any;
  dia: any;
  option = {  hour12: false, weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };


  @Input() events: Array<any>;
  constructor(public snackBar: MatSnackBar, eMan : EventManipulationService, authS : AuthService, db : AngularFireDatabase, dia: EventManipulationDialogsComponent) {
    this.eMan = eMan;
    this.authS = authS;
    this.db = db;
    this.dia = dia;
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }


  ngAfterViewInit() {
    if(document.getElementById('eventdesc') != null) {
       document.getElementById('eventdesc').style.overflow = 'scroll';
    }
   }


  getdate(e) {
    if(this.innerWidth < 500) { return this.getDaysLeft(e); }
    return new Date(e).toLocaleDateString('en-US', this.option);
  }


  getDaysLeft(e) {
    var p = new Date(e);
    var now = new Date();
    var days = Math.floor((p.getTime() - now.getTime())/(3600000*24));
    if(p.toDateString() == now.toDateString()) { return "due today"; }
    if(days < 0) { days = days * -1; return days + " days past";}
    else { return days + " days left"; }
  }


  getLeftDaysColor(e) {
    var p = new Date(e);
    var now = new Date();
    var days = Math.floor((p.getTime() - now.getTime())/(3600000*24));
    if(days > 7) { return 'black';}
    if(days > 3) { return 'lightblue';}
    if(days > 0) { return "yellow"}
    return "red";
  }


  getdesc(t) {
    if(t==null){return  ""}
    var tt = "Decription:  " + t;
    var wFactor = this.innerWidth >= 500 ? 3 : 7;
    var lines = Math.floor(((this.innerWidth*0.2-0.8)*wFactor+1)/14);
    var line = ".{" + lines + "}" ;
    var re = new RegExp(line,"g");
    return tt.replace(re, "$&" + "\r\n");
  }


  getDescHeightCount(t) {
    if(t==null) return 0;
    var wFactor = this.innerWidth >= 500 ? 3 : 7;
    return 20+20*Math.ceil((t.length + 13)/Math.floor(((this.innerWidth*0.2-0.8)*wFactor+1)/14));
  }


  getCata(d) {
    if(this.innerWidth < 500) { return ""; }
    return d;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  add_sample() {
    var heros = [  "Aatrox",  "Ahri",  "Akali",  "Alistar",  "Amumu",  "Anivia",  "Annie",  "Ashe",  "Azir",  "Bard",  "Blitzcrank",  "Brand",  "Caitlyn",  "Cassiopeia",  "Cho'Gath",  "Corki",  "Darius",  "Diana",  "Draven" ,  "Dr. Mundo",  "Ekko",  "Elise",  "Evelynn",  "Ezreal",  "Fiddlesticks",  "Fiora",  "Fizz",  "Galio",  "Gangplank",  "Garen",  "Gragas",  "Graves",  "Hecarim",  "Heimerdinger",  "Irelia",  "Janna",  "Jarvan IV",  "Jax",  "Jayce",  "Jinx",  "Kalista",  "Karma",  "Karthus",  "Kassadin",  "Katarina",  "Kayle",  "Kennen",  "Kha'Zix",  "Kog'Maw",  "LeBlanc",  "Lee Sin",  "Leona",  "Lissandra",  "Lucian",  "Lulu",  "Lux",  "Malphite",  "Malzahar",  "Maokai",  "Master Yi",  "Miss Fortune",  "Wukong",  "Mordekaiser",  "Morgana",  "Nami",  "Nasus",  "Nautilus",  "Nidalee",  "Nocturne",  "Nunu",  "Olaf",  "Orianna",  "Pantheon",  "Poppy",  "Quinn",  "Rammus",  "Rek’Sai",  "Renekton",  "Rengar",  "Riven",  "Rumble",  "Ryze",  "Sejuani",  "Shaco",  "Shen",  "Shyvana",  "Singed",  "Sion",  "Sivir",  "Skarner",  "Sona",  "Soraka",  "Swain",  "Syndra",  "Tahm Kench",  "Talon",  "Taric",  "Teemo",  "Thresh",  "Tristana",  "Trundle",  "Tryndamere",  "Twisted Fate",  "Twitch",  "Udyr",  "Urgot",  "Varus",  "Vayne",  "Veigar",  "Vi",  "Viktor",  "Vladimir",  "Volibear",  "Warwick",  "Xerath",  "Xin Zhao",  "Yasuo",  "Yorick",  "Zac",  "Zed",  "Ziggs",  "Zilean",  "Zyra"];
    var actions = ["'s birthday!", " need help", " need gank", " gtg"];
    var cata;
    var rand1 = Math.floor(Math.random() * 4);
    var rand2 = Math.floor(Math.random() * 60);
    var rand3 = Math.floor(Math.random() * 2000)-1000;
    var rand4 = Math.floor(Math.random() * heros.length);
    var catas = ['School', 'Extracurriculars', 'Social Events', 'Other']
    var t = new Date();
    var sample_desc = "12345678900";
    t.setHours(t.getHours()+rand3, rand2);
    this.eMan.add(new Event(heros[rand4] + actions[rand1], t.getTime(), sample_desc.repeat(rand2), true, catas[rand1], new Date().getTime()));
  }


  update(oe) {
    if(oe == null){ oe = new Event(null, null, null, null, null,null)}
    this.dia.update_dialog(oe).subscribe(res => {
      if(res.eventDesc == null) { res.eventDesc = " ";}
      console.log("Name: " + res.eventName + ", Date: " + res.eDate + ", category: " + res.category);
      if(res != undefined && res.eventName != null && res.eDate != null && res.category != null) {this.openSnackBar("Submiited ( ^_^ )/","");this.eMan.add(res);}
      else {
        this.openSnackBar("", '...Invalid submit, no change made!')}
    });
  }


  delete(ts) {

    var r = this.dia.remove_dialog();
    r.subscribe(res => {
      console.log(res);
      if(res) { this.eMan.delete(ts); }
    });

  }
}

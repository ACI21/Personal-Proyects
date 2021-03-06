import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../service/firebase/auth-firebase.service';

@Component({
  selector: 'app-log-out-component',
  templateUrl: './log-out-component.component.html',
  styleUrls: ['./log-out-component.component.css']
})
export class LogOutComponentComponent implements OnInit {

  constructor(private service : AuthFirebaseService, private router : Router) { }

  ngOnInit(): void {
    this.logOut();
  }

  logOut(){
    this.service.logOut();
    this.router.navigate([""]);
  }
}

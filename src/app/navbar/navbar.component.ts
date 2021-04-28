import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:any;
  constructor(private service : LoginService , private router :Router) { 
    this.name=localStorage.getItem("name");
  }


  ngOnInit(): void {
  }
  logOut(){
    this.service.logout();
    this.router.navigate([""]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser = JSON.parse(localStorage.getItem('user'));
  loggedIn: Boolean = (this.loggedUser != null);
  logOut: Boolean = !this.loggedIn;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.router.navigate(['login']);
  }

  public register() {
    this.router.navigate(['register']);
  }

  public logout() {
    console.log('In logout');
    localStorage.setItem('user', null);
    this.loggedUser = null;
    this.router.navigate(['login']);
  }
}

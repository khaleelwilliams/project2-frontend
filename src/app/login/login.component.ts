import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Router } from '../../../node_modules/@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loggedUser: any;
  isValid: boolean = true;
  navbar: NavbarComponent;

  constructor(private u : UsersService, private router: Router) { }

  ngOnInit() {
    this.loggedUser = localStorage.getItem('user');
    console.log('Test: ' + this.loggedUser);
    if(this.loggedUser != null) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.u.login(this.user).subscribe(response => {
      if(response == null) {
        this.user.password='';
        this.isValid = !this.isValid;
        alert("Invalid Username/Password");
      } else {
        this.loggedUser = <any>response["user"];
        localStorage.setItem('user', JSON.stringify(this.loggedUser));
        this.router.navigate(['home']);
      }
    });
  }

}

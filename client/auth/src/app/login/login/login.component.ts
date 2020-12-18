import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string;
  userDetails: any = {};

  constructor(private AuthService: AuthService, private router: Router) { }

  loginUser() {
    if (this.userDetails.email && this.userDetails.password) {
      this.AuthService.login(this.userDetails).subscribe(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['events/special']);
      }, err => {
        if (err) {
          this.msg = 'LOGIN FAILED!'
        }
      });
    }
    else {
      this.msg = "all Fields are required!"
    }

  }


  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg: string;
  userDetails: any = {};

  constructor(private AuthService: AuthService, private router: Router) { }


  register() {
    if (this.userDetails.email && this.userDetails.password) {
      this.AuthService.register(this.userDetails).subscribe(err => {
        if (err) {
          console.log(err);
        }
      },
        res => {
          if (res.status < 300) {
            this.msg = "succes register !"
          }
        }
      )
    } else {
      this.msg = "error register !"

    }
  }

  ngOnInit(): void {
  }

}

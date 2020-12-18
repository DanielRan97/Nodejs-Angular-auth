import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

logOut(){
  this.authService.loguot();
  this.router.navigate(['auth/login'])
}

  ngOnInit(): void {
  }

}

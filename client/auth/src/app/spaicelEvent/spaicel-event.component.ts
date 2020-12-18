import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';


@Component({
  selector: 'app-spaicel-event',
  templateUrl: './spaicel-event.component.html',
  styleUrls: ['./spaicel-event.component.css']
})
export class SpaicelEventComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  event:Event[]=[];

  getSpicelEvents(){
    this.api.getSpecialEvents().subscribe(res => 
      this.event = res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status == 401 || 500){
            this.router.navigate(['auth/login'])
          }
        }
      }
      );
  }


  ngOnInit(): void {
    this.getSpicelEvents();
  }

}

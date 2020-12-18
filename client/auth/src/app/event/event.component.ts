import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private api:ApiService) { }

  event:Event[]=[];


getEvents(){
  this.api.getGuestEvents().subscribe(res => this.event = res);
}

  ngOnInit(): void {
    this.getEvents();
  }

}

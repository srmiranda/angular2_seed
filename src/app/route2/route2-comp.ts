import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'route2',
  templateUrl: 'app/route2/route2-comp.html',
  styleUrls: ['app/route2/route2-comp.css'],
  directives: [ROUTER_DIRECTIVES ]
})
export class Route2Component implements OnInit {
    title: string;
    
  ngOnInit() {
      console.log('route 2');
      this.title = 'Route2';
  }


}
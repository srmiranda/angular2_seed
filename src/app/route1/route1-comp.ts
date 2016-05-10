import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'route1',
  templateUrl: 'app/route1/route1-comp.html',
  styleUrls: ['app/route1/route1-comp.css'],
  directives: [ROUTER_DIRECTIVES ]
})
export class Route1Component implements OnInit {
    title: string;
    
  ngOnInit() {
      console.log('route 1');
      this.title = 'Route1';
  }


}
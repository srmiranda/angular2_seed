import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
         
import { Route1Component } from '../route1/route1-comp';
import { Route2Component } from '../route2/route2-comp';
import { WikiComponent } from '../wiki/wiki-smart.component';
import { APIComponent } from '../api/api-comp';

import { APP_PROVIDERS } from '../zzProviders/app.providers';


@Component({
  selector: 'seed-app',
  templateUrl: 'app/aaStart/app.component.html',
  styleUrls: ['app/aaStart/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})

@Routes([
  {
    path:'/Route1',  
    component: Route1Component 
  },
  { 
    path: '/Route2', 
    component: Route2Component 
  },
  { 
    path: '/Wiki', 
    component: WikiComponent 
  }, 
  { 
    path: '/API', 
    component: APIComponent 
  }    
   
])

export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }
  
      title: string;
    
  ngOnInit() {
      console.log('app.component');
      this.title = 'My Seed Angular 23 App';
  }

}
  

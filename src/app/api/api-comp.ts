import { Component, OnInit }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { APIService } from './api.service';

@Component({
  selector: 'api-comp',
  templateUrl: 'app/api/api-comp.html',
  styleUrls: ['app/api/api-comp.css'],
  providers: [JSONP_PROVIDERS, APIService]
})
export class APIComponent implements OnInit {



  constructor(private apiService: APIService) { }

  ngOnInit() {
    console.log('here2');
  }

  items: Observable<string[]>;
  events: Observable<string[]>;

  search(term: string) {
    this.items = this.apiService.search(term);
    console.log(this.items);
  }

  getEvents(term: string) {
    this.events = this.apiService.getEvents(term);
    console.log(this.events);
  }

}

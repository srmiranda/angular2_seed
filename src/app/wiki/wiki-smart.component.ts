import { Component, OnInit }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'my-wiki',
  template: `
    <h1>Wikipedia Demo</h1>
    <p><i>Fetches after each keystroke</i></p>

    <input #term (keyup)="search(term.value)"/>

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
 `,
  providers:[JSONP_PROVIDERS, WikipediaService]
})
export class WikiComponent implements OnInit {
  

  
  constructor (private wikipediaService: WikipediaService) {}

ngOnInit() {
            console.log('here2');
}
 
  items: Observable<string[]>;

  search (term: string) {
    this.items = this.wikipediaService.search(term);
    console.log(this.items);
  } 
}

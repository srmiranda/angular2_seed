import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {
    constructor(private jsonp: Jsonp) { }

    search(term: string) {

        let wikiUrl = 'http://localhost/AngularJS2/angularAPI/clubMethods.ashx';


        var params = new URLSearchParams();
        params.set('code', 'club'); // the user's search value
        params.set('cID', term);
        params.set('callback', 'JSONP_CALLBACK');

        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(request => <string[]>request.json());
    }

    getEvents(term: string) {

        // http://localhost/AngularJS2/angularAPI/AngularServerInfo.ashx?code=events&cID=55&evYear=2016&callback=JSON_CALLBACK&q=12345;
        let apiUrl = 'http://localhost/AngularJS2/angularAPI/AngularServerInfo.ashx';


        var params = new URLSearchParams();
        params.set('code', 'events'); // the user's search value
        params.set('cID', term);
        params.set('evYear', '2016'); // the user's search value
        params.set('callback', 'JSONP_CALLBACK');

        // TODO: Add error handling
        return this.jsonp
            .get(apiUrl, { search: params })
            .map(request => <string[]>request.json());
    }

}

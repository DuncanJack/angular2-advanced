import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; // URL to web API

    constructor(private http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addHero(name: string): Observable<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log('body', body);
        return body || { };
    }

    private handleError(error: any) {
        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'server error';
        console.log(errorMsg);
        return Observable.throw(errorMsg);
    }
}
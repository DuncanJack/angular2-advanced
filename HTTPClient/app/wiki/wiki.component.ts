import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
    selector: 'wiki',
    templateUrl: 'app/wiki/wiki.component.html',
    providers: [
        WikipediaService
    ]
})
export class WikiComponent {
    items: Observable<string[]>;

    constructor(private wikipediaService: WikipediaService) {
    }

    search(term: string): void {
        // Instead of subscribing to the observable inside the component as we did in the HeroListComponent, 
        // we forward the observable result to the template (via items) where the async pipe in the ngFor handles the subscription.
        // We often use the async pipe in read-only components where the component has no need to interact with the data. 
        // We couldn't use the pipe in the HeroListComponent because the "add hero" feature pushes newly created heroes into the list.
        this.items = this.wikipediaService.search(term);
    }
}
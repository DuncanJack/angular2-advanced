import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html',
    providers: [
        HeroService
    ]
})
export class HeroListComponent implements OnInit {

    errorMessage: string;
    heroes: Hero[];
    mode = 'Observable';

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        // Compare with WikiComponent.Search.
        // We subscribe to the observable here, instead of forwarding it to the view and using an async pipe, 
        // Reason is we want to interact with the data here, pushing the newly-created hero to the list.
        this.heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error);
    }

    addHero(name: string): void {
        if (!name) { return; }

        // Compare with WikiComponent.Search.
        // We subscribe to the observable here, instead of forwarding it to the view and using an async pipe, 
        // Reason is we want to interact with the data here, pushing the newly-created hero to the list.
        this.heroService.addHero(name)
            .subscribe(
                hero => this.heroes.push(hero),
                error => this.errorMessage = <any>error);
    }
}
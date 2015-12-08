declare var require;
require('zone.js');
require('reflect-metadata');

import {Component, View, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';

class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'display',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <div><input [(ng-model)]="hero.name" placeholder="name"></div>
        </div>
    `,
    directives: [FORM_DIRECTIVES]
})
class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}

bootstrap(AppComponent);
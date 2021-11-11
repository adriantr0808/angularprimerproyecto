import { Component } from "@angular/core";

@Component({
    selector: 'app-deportes',
    templateUrl: './deportes.component.html',
    styleUrls: ['./deportes.component.css']
})

export class Deportes {
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.sports = ['Futbol', 'Baloncesto', 'Tenis'];
        this.numeros = [1, 2, 3, 4, 5];
    }
}
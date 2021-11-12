import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-tablamultiplicar',
    templateUrl: './tablamultiplicar.component.html'
})

export class TablaMultiplicar {
    @ViewChild('cajanumero') cajanumero: ElementRef;

    public tabla: Array<number>;
    public numero: number;

    constructor() {
        this.tabla = [];
        this.cajanumero = new ElementRef(0);
        this.numero = 0;

    }

    tablaMultiplicar(): void {
        this.tabla = [];
        this.numero = this.cajanumero.nativeElement.value;
        var resultado = 0;
        for (let i = 0; i < 10; i++) {
            resultado = this.numero * i;
            this.tabla.push(resultado);
        }


    }
}
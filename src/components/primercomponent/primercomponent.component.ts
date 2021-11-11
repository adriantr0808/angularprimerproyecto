import { Component } from '@angular/core';

@Component({
    //INDICAMOS EL NOMBRE DE NUESTRO COMPONENT PARA TRABAJAR
    selector: 'primer-componente',
    templateUrl: './primercomponent.component.html',
    styleUrls: ['./primercomponent.component.css']

})

export class PrimerComponent {
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    public ocultar: boolean;
    //INICIALIZAMOS LAS PROPIEDADES EN EL CONSTRUCTOR
    constructor() {
        this.titulo = " Hoy es jueves de Angular";
        this.descripcion = 'Aprendiendo Angular a tope';
        this.anyo = 2021;
        this.ocultar = false;
    }

    ocultarComponente(): void {
        this.ocultar = true;
    }
}
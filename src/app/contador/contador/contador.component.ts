import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Holiwis</h1>
        <h2>{{ title }}</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(-base);" > -{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(base);"> +{{base}} </button>
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    // Metodos
    acumular(valor: number) {
        this.numero += valor;
    }
}
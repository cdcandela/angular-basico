import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['goku', 'thor', 'hulk','vegeta','seiya']
  heroeBorrado: string = '';
  // Metodos
  borrarHeroe(): void{
    // this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

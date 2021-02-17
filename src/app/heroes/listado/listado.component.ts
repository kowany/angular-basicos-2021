import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'Superman', 'Thor' ];
  public heroeBorrado: string = '';
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    // this.heroes.splice(this.heroes.length-1,1);
  }
 }

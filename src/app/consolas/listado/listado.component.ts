import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  consolas: string[] = ["Xbox One","PS4","Nintendo switch","PC","Zeebo","Game Boy Advance","Nintendo DS","PSP"];

  consolaBorrada: string = '';

  borrarConsola(){
    
    this.consolaBorrada = this.consolas.shift() || ''; 
  }



}

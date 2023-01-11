import { Component } from "@angular/core";

@Component({
    selector: 'app-consola',
    templateUrl: 'consola.component.html'
    
})

export class ConsolaComponent{

nombre: string = "Xbox";
fecha: number = 2005

get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

ObtenerNombre(): string {
    return `${ this.nombre } - ${ this.fecha }`;
}

cambiarNombre():void{
    this.nombre = "Playstation 4";
}

cambiarFecha():void{
    this.fecha = 1994;
}

}
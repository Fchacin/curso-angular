import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConsolaComponent } from "./consola/consola.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        ConsolaComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ConsolasModule {}
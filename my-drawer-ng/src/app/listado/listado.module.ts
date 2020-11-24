import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

//import { NoticiasService } from "../domain/noticias.service";
import { ListadoRoutingModule } from "./listado-routing.module";
import { ListadoComponent } from "./listado.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListadoRoutingModule
    ],
    declarations: [
        ListadoComponent
    ],
    //providers: [NoticiasService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListadoModule { }

export class DetalleComponent {
    resultados: Array<string> = [];
    onPull(e) {
     console.log(e);
     const pullRefresh = e.object;
     setTimeout(() => {
     this.resultados.push("xxxxxxx");
     pullRefresh.refreshing = false;
     }, 2000);
    }
    } 

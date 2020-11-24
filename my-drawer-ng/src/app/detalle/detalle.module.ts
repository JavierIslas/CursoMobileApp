import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

//import { NoticiasService } from "../domain/noticias.service";
import { DetalleRoutingModule } from "./detalle-routing.module";
import { DetalleComponent } from "./detalle.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DetalleRoutingModule
    ],
    declarations: [
        DetalleComponent
    ],
    //providers: [NoticiasService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetalleModule { }


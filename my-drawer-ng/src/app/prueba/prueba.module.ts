import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PruebaRoutingModule } from "./prueba-routing.module";
import { PruebaComponent } from "./prueba.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PruebaRoutingModule
    ],
    declarations: [
        PruebaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PruebaModule { }

import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";


@Component({
    selector: "Listado",
    moduleId: module.id,
    templateUrl: "./listado.component.html",
    //providers: [NoticiasService]
})
export class ListadoComponent implements OnInit {

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
       this.noticias.agregar("Hotel 1");
       this.noticias.agregar("Hotel 2");
       this.noticias.agregar("Hotel 3");
        }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x): void{
        console.log(x.index);
    }


}

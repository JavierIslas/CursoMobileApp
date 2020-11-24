import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";


@Component({
    selector: "etalle",
    moduleId: module.id,
    templateUrl: "./detalle.component.html",
    //providers: [NoticiasService]
})

export class DetalleComponent implements OnInit {
    resultados: Array<string> = [];

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
       this.noticias.agregar("detalle!");
       this.noticias.agregar("detalle 2");
       this.noticias.agregar("detalle 3");
        }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x): void{
        console.dir(x);
    }
    

    onPull(e) {
        console.dir(e);
        const pullRefresh = e.object;
        setTimeout(() => {
        this.resultados.push("xxxxxxx");
        pullRefresh.refreshing = false;
        }, 2000);
       }

}


import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";


@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    //providers: [NoticiasService]
})
export class SearchComponent implements OnInit {

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
       this.noticias.agregar("hola!");
       this.noticias.agregar("hola2");
       this.noticias.agregar("hola3");
        }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x): void{
        console.dir(x);
    }


}

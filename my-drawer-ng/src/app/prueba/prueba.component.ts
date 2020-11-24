import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Prueba",
    moduleId: module.id,
    templateUrl: "./Prueba.component.html"
})
export class PruebaComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("adasd");
        console.log({nombre: {nombre:{nombre:{nombre: "Jhayr"}}}});
        console.dir({nombre: {nombre:{nombre:{nombre: "pepe"}}}});
        console.log([1,2,3]);
        console.dir([4,5,6]);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

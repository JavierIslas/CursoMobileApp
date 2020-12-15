import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Color,} from "@nativescript/core";
import { NoticiasService } from "../domain/noticias.service";
import { android } from "@nativescript/core/application";
import { View } from "@nativescript/core/ui/core/view";
@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    resultados: Array<string>;
    public c: string;
    @ViewChild("layout") layout: ElementRef;
    @ViewChild("logo") logo: ElementRef;

    constructor(public noticias: NoticiasService) {
        this.c = "";
    }

    ngOnInit(): void {
        
        this.noticias.agregar("HOLA");
        this.noticias.agregar("HOLA 2");
        this.noticias.agregar("HOLA 3");
        this.cambio();
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    };
    cambio() {       //METODO QUE SOLO SE EJECUTA EN ANDROID
        if (android) {
            this.c="ANDROID"
        }
    }
    onItemTap(x): void {
        console.dir(x);
    }
    buscarAhora(s: string) {
        this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);
        const layout = <View>this.layout.nativeElement;
        const logo = <View>this.logo.nativeElement;
        layout.animate({
            backgroundColor: new Color("blue"),
            duration: 300,
            delay: 300
        }).then(() => layout.animate({
            backgroundColor: new Color("white"),
            duration: 300,
            delay: 300
        }));
        logo.animate({
            rotate: 360,
            duration: 3000
        });
    }
}

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as Toast from "nativescript-toasts";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Color, Dialogs, View } from "@nativescript/core";
import { NoticiasService } from "../domain/noticias.service";
import { registerElement } from "@nativescript/angular";
import { delay } from "rxjs/operators";

registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    //providers: [NoticiasService]
})

export class SearchComponent implements OnInit {
    resultados: Array<string>;
    @ViewChild("layout") layout: ElementRef;

    constructor(public noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    doLater(fn) { setTimeout(fn, 1000);}

    ngOnInit(): void {
        // Init your component properties here.
        /*this.noticias.agregar("Hola!");
        this.noticias.agregar("Seleccionar categoría");
        this.noticias.agregar("Opcional");
        this.doLater(() =>
            Dialogs.action("Mensaje", "Ingresar", ["Seleccionar"])
                .then((result) => {
                    console.log("resultado" + result);
                    if (result === "Seleccionar") {
                        //this.doLater(() => 
                            const toastOptions: Toast.ToastOptions = {text: "Atributo seleccionado", duration: Toast.DURATION.SHORT}
                            this.doLater(() => Toast.show(toastOptions));
                    } /*else if (result === "Opcion2") {
                        this.doLater(() =>
                            Dialogs.alert({
                                title: "Título 2",
                                message: "msg 2",
                                okButtonText: "btn 2"
                            }).then(() => console.log("Cerrado 2!")));
                    }
                }));*/
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        console.dir(x);
    }

    refreshList(args) {
        const pullRefresh = args.object;
        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000);
    }

    buscarAhora(s: string) {
        /*this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

        const layout = <View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("blue"),
            duration: 3000,
            delay: 1500
        }).then(() => layout.animate({
            backgroundColor: new Color("white"),
            duration: 3000,
            delay: 1500
        }));*/
        console.dir("buscarAhora" + s);
        this.noticias.buscar(s).then((r: any) => {
            console.log("resultados buscarAhora: " + JSON.stringify(r));
            this.resultados = r;
        }, (e) => {
            console.log("error buscarAhora " + e);
            Toast.show({text: "Error en la búsqueda", duration: Toast.DURATION.SHORT});
        });
    }
}

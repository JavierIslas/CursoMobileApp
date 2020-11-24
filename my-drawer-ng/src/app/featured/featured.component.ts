import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Color, Dialogs, GestureEventData, GridLayout, View } from "@nativescript/core";
import * as Toast from "nativescript-toasts";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {
    @ViewChild("layout") layout: ElementRef;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }

    onLongPress(args: GestureEventData) {
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);

        const grid = <GridLayout>args.object;
        grid.rotate = 0;
        grid.animate({
            rotate: 360,
            duration: 2000
        });

        const layout = <View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("green"),
            duration: 3000,
            delay: 1500
        }).then(() => layout.animate({
            backgroundColor: new Color("white"),
            duration: 3000,
            delay: 1500
        }));
    }

    onAction() {
        Dialogs.action("Mensaje", "Cancelar", ["Borrar", "Archivar"])
                .then((result) => {
                    console.log("resultado" + result);
                    if (result === "Borrar") {
                        const toastOptions: Toast.ToastOptions = {text: "Elemento borrado", duration: Toast.DURATION.SHORT};
                        Toast.show(toastOptions)
                    } else if (result === "Archivar") {
                        const toastOptions: Toast.ToastOptions = {text: "Elemento Archivado", duration: Toast.DURATION.SHORT};
                        Toast.show(toastOptions)
                    }
                });
    }
}

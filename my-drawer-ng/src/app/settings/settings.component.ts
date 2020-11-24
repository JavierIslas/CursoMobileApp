import { Component, OnInit } from "@angular/core";
import * as Toast from "nativescript-toasts";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Dialogs } from "@nativescript/core";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    doLater(fn) { setTimeout(fn, 1000);}

    ngOnInit(): void {
        // Init your component properties here.
        this.doLater(() =>
            Dialogs.action("Mensaje", "Cancelar", ["Eliminar"])
                .then((result) => {
                    console.log("resultado" + result);
                    if (result === "Eliminar") {
                        this.doLater(() =>
                            Dialogs.alert({
                                title: "Mensaje ",
                                message: "Se eliminó elemento",
                                okButtonText: "OK"
                            }).then(() => console.log("Se eliminó elemento")));
                    } /*else if (result === "Opcion2") {
                        this.doLater(() =>
                            Dialogs.alert({
                                title: "Título 2",
                                message: "msg 2",
                                okButtonText: "btn 2"
                            }).then(() => console.log("Cerrado 2!")));
                    }*/
                }));
        const toastOptions: Toast.ToastOptions = {text: "Hello World", duration: Toast.DURATION.SHORT};
        this.doLater(() => Toast.show(toastOptions));
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}

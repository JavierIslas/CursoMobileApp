import { Injectable } from '@angular/core';
import { getJSON, request } from "tns-core-modules/http";

@Injectable()
export class NoticiasService {
    //private noticias: Array<string> = [];
    api: string = "https://0c8fa861a2fe.ngrok.io";

    agregar(s: string) {
        //this.noticias.push(s);
        return request({
            url: this.api + "/favs",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
            nuevo: s
            })
        });
    }

    favs() {
        return getJSON(this.api + "/favs");
    }

    buscar(s: string) {
        //return this.noticias;
        return getJSON(this.api + "/get?q=" + s);
    }
}
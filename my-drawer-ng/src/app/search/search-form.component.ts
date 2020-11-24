import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "SearchForm",
    template: `<TextField [(ngModel)]="textFieldValue" hint="Ingresar texto..."></TextField>
                <Button text="Buscar" (tap)="onButtonTap()"></Button>`
})

export class SearchFormComponent {
    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
        }
    }
}
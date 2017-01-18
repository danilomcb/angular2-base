/**
 * Created by danilo-barros on 17/01/17.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'video-detalhes',
    templateUrl: 'app/video/video-detalhes.component.html'
})

export class VideoDetalhesComponent {
    @Input() video;
    @Output() closeForm = new EventEmitter();
    private tituloEditavel: boolean = false;

    onTitleClick(): void {
        this.tituloEditavel = true;
    }

    onButtonOkClick() {
        this.closeForm.next({});
    }

    ngOnChanges() {
        this.tituloEditavel = false;
    }
}
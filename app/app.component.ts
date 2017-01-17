import {Component} from '@angular/core'
import {Config} from "./config.service";
import {Video} from "./video";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    titulo = Config.TITULO;
    videos: Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "Test", "www.test.com", "Test Description"),
            new Video(2, "Test 2", "www.test2.com", "Test Description"),
        ];
    }
}

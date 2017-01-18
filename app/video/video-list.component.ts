/**
 * Created by danilo-barros on 17/01/17.
 */
import {Input, Output, Component, EventEmitter} from "@angular/core"
import {Video} from "./video";

@Component({
    selector: 'video-list',
    templateUrl: 'app/video/video-list.component.html'
})

export class VideoListComponent {
    @Input() videos;
    @Output() selectVideos: EventEmitter<Video> = new EventEmitter<Video>();

    onSelect(video:Video) {
        this.selectVideos.next(video);
    }
}
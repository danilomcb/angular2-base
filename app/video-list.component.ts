/**
 * Created by danilo-barros on 17/01/17.
 */
import {Input, Component} from "@angular/core"

@Component({
    selector: 'video-list',
    templateUrl: 'app/video-list.component.html'
})

export class VideoListComponent {
    @Input() videos;
}
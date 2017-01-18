import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {VideoListComponent} from "./video/video-list.component";
import {VideoDetalhesComponent} from "./video/video-detalhes.component";
import {SafePipe} from "./safe.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, VideoListComponent, VideoDetalhesComponent, SafePipe],
    bootstrap: [AppComponent]
})

export class AppModule {
}
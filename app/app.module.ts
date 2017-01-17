import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {VideoListComponent} from "./video-list.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, VideoListComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
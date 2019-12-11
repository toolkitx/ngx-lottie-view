import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngx-lottie-app';

    complete() {
        console.log('complete');
    }

    ready() {
        console.log('ready');
    }
}

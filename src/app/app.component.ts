import { Component, Inject, OnInit } from '@angular/core'
import { CustomIconService } from './services/custom-icon.service'
import { HOSTGETTER } from './services/host-getter.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'my-app'

    constructor(
        CustomIconService: CustomIconService,
        @Inject(HOSTGETTER) private HOSTGETTER: Window
    ) {
        console.log(HOSTGETTER)
    }

    ngOnInit() {}
}

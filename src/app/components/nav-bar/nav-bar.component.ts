import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LinksInterface } from 'src/app/data/linksNames';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
    constructor(private readonly router: Router) {}

    openModal(): void {
        this.router.navigate([
            this.router.url,
            { outlets: { modal: ['sign_in'] } },
        ]);
    }

    linksArr: LinksInterface[] = [
        { name: 'About Us', link: '/qq' },
        { name: 'Courses', link: '/qq' },
        { name: 'Events', link: '/qq' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contracts', link: '/contacts' },
        { name: 'Charts', link: './charts' },
    ];
}

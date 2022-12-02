import { Component, OnInit, Input } from '@angular/core';
import { LinksInterface } from 'src/app/data/linksNames';

@Component({
    selector: 'app-follow-links',
    templateUrl: './follow-links.component.html',
    styleUrls: ['./follow-links.component.scss'],
})
export class FollowLinksComponent implements OnInit {
    @Input() linksArr: LinksInterface[] = [];

    constructor() {}

    setLogo(logo: string): string {
        switch (logo) {
            case 'google':
                return 'google';
            case 'youtube':
                return 'youtube';
            case 'twitter':
                return 'twitter';
            case 'linked':
                return 'linked';
            case 'inst':
                return 'inst';
            default:
                return 'facebook';
        }
    }

    ngOnInit(): void {}
}

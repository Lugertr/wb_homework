import { Component, OnInit } from '@angular/core';
import { contactsData } from 'src/app/data/contactsData';
import { siteMap, courses } from 'src/app/data/linksNames';

import { social_networks_links } from 'src/app/data/linksNames';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    social_networks = social_networks_links;
    siteMapLinks = siteMap;
    coursesLinks = courses;

    contactsData = contactsData;

    constructor() {}

    ngOnInit(): void {}
}

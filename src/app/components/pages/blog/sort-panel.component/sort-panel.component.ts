import { Component, OnInit } from '@angular/core';
import {
    sortBlogService,
    SortBlogParsInterface,
} from 'src/app/services/sort-blogs.service';

interface TypeTabsDataInterface {
    name: string;
    par: string;
    icon: string | null;
}

@Component({
    selector: 'app-sort-panel',
    templateUrl: './sort-panel.component.html',
    styleUrls: ['./sort-panel.component.scss'],
})
export class SortPanelComponent implements OnInit {
    typeTabs: TypeTabsDataInterface[] = [
        {
            name: 'All',
            par: 'all',
            icon: null,
        },
        {
            name: 'Articles',
            par: 'Article',
            icon: 'files',
        },
        {
            name: 'Videos',
            par: 'Video',
            icon: 'play',
        },
        {
            name: 'Podcasts',
            par: 'Podcast',
            icon: 'mic',
        },
    ];

    sortBlogPars: SortBlogParsInterface = {
        type: 'all',
        theme: '',
        title: '',
    };

    selectOptions = new Set<string>();

    constructor(public sortBlogService: sortBlogService) {}

    ngOnInit(): void {
        this.selectOptions = this.sortBlogService.formBlogCategories();
        this.sortBlogService.setSortBlogPars(this.sortBlogPars);
    }

    sortCards(key: string, value: string): void {
        switch (key) {
            case 'theme':
                this.sortBlogPars.theme = value;
                break;
            case 'type':
                this.sortBlogPars.type = value;
                break;
            case 'title':
                this.sortBlogPars.title = value;
                break;
        }
        this.sortBlogService.setSortBlogPars(this.sortBlogPars);
    }
}

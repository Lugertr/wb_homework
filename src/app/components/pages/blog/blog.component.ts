import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
    sortBlogService,
    sortBlogStreamInterface,
} from 'src/app/services/sort-blogs.service';
import { Observable, Subscription } from 'rxjs';


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    providers: [sortBlogService],
})
export class BlogComponent implements OnInit {
    pageNumbers: number[] = [];
    CardsNumber = 0;
    curentPage = 1;

    sortedBlogs$: Observable<sortBlogStreamInterface>;
    sortedBlogsSubscribe: Subscription;

    selectOptions: Set<string> = new Set();

    constructor(
        private readonly router: Router,
        public sortBlogService: sortBlogService
    ) {
        this.sortedBlogs$ = sortBlogService.sortedBlogs$;
        this.sortedBlogsSubscribe = this.sortedBlogs$.subscribe((val) =>
            this.calcPageNumber(val.length)
        );
    }

    openPost(i: number): void {
        this.router.navigate([this.router.url, 'single-post']);
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.sortedBlogsSubscribe.unsubscribe();
        this.sortBlogService.onDestroy();
    }

    calcPageNumber(length: number): void {
        if (length != this.CardsNumber) {
            this.CardsNumber = length;
            this.curentPage = 1;
        }

        const pagesSize = Math.ceil(length / 8);

        this.pageNumbers.length = 0;

        for (let i = 1; i <= pagesSize; i++) {
            this.pageNumbers.push(i);
        }
    }

    setPage(i: number): void {
        this.curentPage = i;
        this.sortBlogService.changeSortedBlogs(i);
    }
}

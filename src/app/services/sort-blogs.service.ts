import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { blogCardList, BlogDataInterface } from '../data/blogsData';

export interface SortBlogParsInterface {
    type: string | null;
    theme: string | null;
    title: string | null;
}

export interface sortBlogStreamInterface {
    blogs: BlogDataInterface[];
    length: number;
}

@Injectable()
export class sortBlogService {
    blogs: BlogDataInterface[] = blogCardList;
    private sortedBlogs = new BehaviorSubject<sortBlogStreamInterface>({
        blogs: this.blogs,
        length: this.blogs.length,
    });
    sortedBlogs$ = this.sortedBlogs.asObservable().pipe(
        map((val) => {
            if (val.blogs.length > this.size)
                val.blogs = val.blogs.filter((val, ind) => ind < 8);
            return val;
        })
    );

    sortBlogPars = new Subject<SortBlogParsInterface>();
    sortBlogPars$ = this.sortBlogPars.asObservable();
    sortBlogParsSubscribe = this.sortBlogPars$.subscribe(
        (value: SortBlogParsInterface) => this.cardsSort(value)
    );
    size = 8;

    constructor() {}

    onDestroy(): void {
        this.sortBlogParsSubscribe.unsubscribe();
    }

    setSortBlogPars(pars: SortBlogParsInterface): void {
        this.sortBlogPars.next(pars);
    }

    formBlogCategories(): Set<string> {
        const blogCategories = new Set<string>();
        this.blogs.forEach((blog) => {
            blogCategories.add(blog.theme);
        });
        return blogCategories;
    }

    changeSortedBlogs(i: number): void {
        const index = (i - 1) * this.size;
        const sortedBlogs: BlogDataInterface[] = [];
        for (
            let j = index;
            j < index + this.size && j < this.blogs.length;
            j++
        ) {
            sortedBlogs.push(this.blogs[j]);
        }

        this.sortedBlogs.next({
            blogs: sortedBlogs,
            length: this.blogs.length,
        });
    }

    cardsSort(ObserveValue: SortBlogParsInterface) {
        this.blogs = blogCardList;
        Object.entries(ObserveValue).forEach(([key, parValue]) => {
            switch (key) {
                case 'title':
                    if (!parValue) break;
                    this.blogs = this.blogs.filter((card) =>
                        card.title.toLowerCase().includes(parValue)
                    );
                    break;
                default:
                    if (parValue == 'all' || !parValue) break;
                    this.blogs = this.blogs.filter(
                        (blog) =>
                            blog[key as keyof BlogDataInterface] == parValue
                    );
                    break;
            }
        });
        this.changeSortedBlogs(1);
    }
}

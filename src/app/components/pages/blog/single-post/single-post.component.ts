import { Component, OnInit } from '@angular/core';

import { ChekboxFormsInterface } from 'src/app/data/InputForms';
import { BlogDataInterface, blogCards } from 'src/app/data/blogsData';

import { LinksInterface } from 'src/app/data/linksNames';
import {
    blogArticle_social_links,
    blogArticle_author_links,
} from 'src/app/data/linksNames';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
    cards: BlogDataInterface[] = blogCards;
    subscribeCheckboxData: ChekboxFormsInterface = {
        labelName:
            'I agree to receive communications from Createx Online School',
        type: 'checkbox',
        required: true,
    };

    article_links: LinksInterface[] = blogArticle_social_links;
    author_links: LinksInterface[] = blogArticle_author_links;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {}

    openBlog(): void {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}

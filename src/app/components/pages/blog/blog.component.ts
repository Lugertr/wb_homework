import { Component, OnInit } from '@angular/core';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { BlogDataInterface,blogCards } from 'src/app/data/blogsData';

import { LinksInterface } from 'src/app/types/typesUI';
import { blogArticle_social_links,blogArticle_author_links } from 'src/app/data/linksNames';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss',]
})
export class BlogComponent implements OnInit {

  cards: BlogDataInterface[] = blogCards;
  subscribeCheckboxData: ChekboxFormsInterface = {
    labelName: "I agree to receive communications from Createx Online School",
    type:"checkbox",
    required:true,
  }

  article_links: LinksInterface[] = blogArticle_social_links;
  author_links: LinksInterface[] = blogArticle_author_links;

  constructor() {}



  ngOnInit(): void {
  }

}

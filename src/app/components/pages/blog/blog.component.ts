import { Component, OnInit } from '@angular/core';

import { BlogDataInterface, blogCardList } from 'src/app/data/blogsData';

import { LinksInterface } from 'src/app/data/linksNames';
import {
  blogArticle_social_links,
  blogArticle_author_links,
} from 'src/app/data/linksNames';
import { Router } from '@angular/router';

interface sortBlogParsInterface {
  type: string | null;
  theme: string | null;
  title: string | null;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  cards: BlogDataInterface[] = blogCardList;
  filtredCards: BlogDataInterface[] = [];
  pageNumbers: number[] = [];
  curentPage = 1;

  sortBlogPars: sortBlogParsInterface = {
    type: 'all',
    theme: '',
    title: '',
  };

  article_links: LinksInterface[] = blogArticle_social_links;
  author_links: LinksInterface[] = blogArticle_author_links;
  selectOptions: Set<string> = new Set();

  constructor(private readonly router: Router) {}

  openPost(i: number): void {
    this.router.navigate([this.router.url, 'single-post']);
  }

  ngOnInit(): void {
    this.cards.forEach((card) => {
      this.selectOptions.add(card.theme);
    });
    this.culcPageNumber();
    this.filtedCardsArrFill(1);
  }

  culcPageNumber(): void {
    this.curentPage = 1;
    this.pageNumbers.length = 0;
    const pagesSize = Math.ceil(this.cards.length / 8);

    for (let i = 1; i <= pagesSize; i++) {
      this.pageNumbers.push(i);
    }
  }

  setPage(i: number): void {
    if (i > Math.ceil(this.cards.length / 8)) return;
    this.curentPage = i;
    this.filtedCardsArrFill(i);
  }

  filtedCardsArrFill(i: number): void {
    const index = (i - 1) * 8;
    this.filtredCards.length = 0;
    for (let j = index; j < index + 8 && j < this.cards.length; j++) {
      this.filtredCards.push(this.cards[j]);
    }
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

    this.cards = blogCardList;

    Object.entries(this.sortBlogPars).forEach(([key, parValue]) => {
      switch (key) {
        case 'title':
          if (!parValue) break;
          this.cards = this.cards.filter((card) =>
            card.title.toLowerCase().includes(parValue)
          );
          break;
        default:
          if (parValue == 'all' || !parValue) break;
          this.cards = this.cards.filter(
            (card) => card[key as keyof BlogDataInterface] == parValue
          );
          break;
      }
    });
    this.culcPageNumber();
    this.filtedCardsArrFill(1);
  }
}

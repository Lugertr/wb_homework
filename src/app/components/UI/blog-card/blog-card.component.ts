import { Component, OnInit,Input } from '@angular/core';

import { BlogDataInterface } from 'src/app/data/blogsData';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() data: BlogDataInterface = {
    theme: 'Empty', date: "None", time: 'None',
    title: "None",
    text: "None",
    type: 'Podcast',
  }
  @Input() dataIndex: number = 0;

  imgPath!: string;
  linkName!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imgPath = `assets/blog/blogs_data_assets/Image${this.dataIndex}.png`
    this.linkName = (this.data.type==='Podcast') ? 'Listen': 'Read';
  }

}

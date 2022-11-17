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
    type: 'podcast'
  };

  constructor() {}

  ngOnInit(): void {
  }

}

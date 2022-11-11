import { Component, OnInit } from '@angular/core';
import { LinksInterface } from 'src/app/types/typesUI';
import { siteMap,courses } from 'src/app/data/linksNames';

import { social_networks_links } from 'src/app/data/linksNames';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../styles/footer.scss',]
})
export class FooterComponent implements OnInit {

  social_networks: LinksInterface[] = social_networks_links;
  siteMapLinks: LinksInterface[] = siteMap;
  coursesLinks: LinksInterface[] = courses;

  constructor() { }

  ngOnInit(): void {
  }

}

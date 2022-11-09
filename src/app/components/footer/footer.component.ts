import { Component, OnInit } from '@angular/core';
import { LinksInterface } from 'src/app/types/typesUI';
import { siteMap,courses } from 'src/app/data/linksNames';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoColor: 'white' = "white"

  siteMapLinks: LinksInterface[] = siteMap;
  coursesLinks: LinksInterface[] = courses;

  constructor() { }

  ngOnInit(): void {
  }

}

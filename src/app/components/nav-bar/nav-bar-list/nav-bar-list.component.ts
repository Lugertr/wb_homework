import { Component, OnInit } from '@angular/core';

import { LinksInterface } from 'src/app/types/typesUI';

@Component({
  selector: 'app-nav-bar-list',
  templateUrl: './nav-bar-list.component.html',
  styleUrls: ['./nav-bar-list.component.scss']
})
export class NavBarListComponent implements OnInit {

  linksArr: LinksInterface[] = [
    {name:"About Us",link: null},
    {name:"Courses",link: null},
    {name:"Events",link: null},
    {name:"Blog",link: null},
    {name:"Contracts",link: null},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

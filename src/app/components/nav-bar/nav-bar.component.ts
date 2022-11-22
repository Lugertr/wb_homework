import { Component} from '@angular/core';
import {Router} from '@angular/router';

import { LinksInterface } from 'src/app/types/typesUI';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {

  constructor(private readonly router: Router) { }

  openModal(): void  {
    this.router.navigate([this.router.url,{outlets:{modal:['sign_in']}}]);
  }

  linksArr: LinksInterface[] = [
    {name:"About Us",link: '/'},
    {name:"Courses",link: '/'},
    {name:"Events",link: '/'},
    {name:"Blog",link: '/single-post'},
    {name:"Contracts",link: '/contacts'},
    {name:"Graphs", link: './graphs'}
  ];


}

import { Component, Input,Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import { LinksInterface } from 'src/app/types/typesUI';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../styles/nav.scss']
})
export class NavBarComponent  {


  @Input() modalVisKostil: boolean = false;
  @Output() modalVisKostilChange = new EventEmitter<boolean>();

  constructor(private readonly router: Router) { }

  openModal()  {
    this.router.navigate([this.router.url,{outlets:{modal:['sign_in']}}]);
  }


  linksArr: LinksInterface[] = [
    {name:"About Us",link: '/'},
    {name:"Courses",link: '/'},
    {name:"Events",link: '/'},
    {name:"Blog",link: '/blog'},
    {name:"Contracts",link: '/contacts'},
  ];


}

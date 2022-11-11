import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

import { LinksInterface } from 'src/app/types/typesUI';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../styles/nav.scss']
})
export class NavBarComponent implements OnInit {

  logoColor: 'black' = 'black';

  @Input() modalVisKostil: boolean = false;
  @Output() modalVisKostilChange = new EventEmitter<boolean>();

  onChangemodalVis(state: boolean) {
    this.modalVisKostil = state;
    this.modalVisKostilChange.emit(state)
  }

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

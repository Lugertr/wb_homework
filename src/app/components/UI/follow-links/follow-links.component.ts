import { Component, OnInit,Input } from '@angular/core';
import { LinksInterface } from 'src/app/types/typesUI';

@Component({
  selector: 'app-follow-links',
  templateUrl: './follow-links.component.html',
  styleUrls: ['../../../styles/UI/links.scss']
})
export class FollowLinksComponent implements OnInit {

  @Input() color: "white" | "gray" = 'gray';
  @Input() linksArr: LinksInterface[] = [];

  constructor() { }

  setLogo(logo:string) {
    switch(logo) {
        case 'google': return 'google';
        case 'youtube': return 'youtube';
        case 'twitter': return 'twitter';
        case 'linked': return 'linked';
        case 'inst': return 'inst';
        default: return 'facebook';
    }

  }


  ngOnInit(): void {

  }

}

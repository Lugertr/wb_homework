import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-follow-links',
  templateUrl: './follow-links.component.html',
  styleUrls: ['./follow-links.component.scss']
})
export class FollowLinksComponent implements OnInit {

  @Input() color: "white" | "black" = 'black';
  @Input() footer: boolean = false;

  constructor() { }

  getColor(): string {
    if (this.color=='white')
      return "#FFFFFF"
    return "#787A80"
  }

  footerOpacity():string {
    if (this.footer)
      return '0.6'
    return '1'
  }


  ngOnInit(): void {
  }

}

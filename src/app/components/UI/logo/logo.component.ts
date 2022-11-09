import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {

  @Input() color: 'black' | 'white' = 'white'

  getColor(): string {
    if (this.color=='white')
      return "#FFFFFF"
    return "#1E212C"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

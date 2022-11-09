import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-li-first',
  templateUrl: './li-first.component.html',
  styleUrls: ['../footer.component.scss']
})
export class LiFirstComponent implements OnInit {

  logoColor: 'white' = "white";

  constructor() { }

  ngOnInit(): void {
  }

}

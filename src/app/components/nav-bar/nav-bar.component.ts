import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss',]
})
export class NavBarComponent implements OnInit {

  logoColor: 'black' = 'black';

  @Input() modalVisKostil: boolean = false;
  @Output() modalVisKostilChange = new EventEmitter<boolean>();

  onChangemodalVis(state: boolean) {
    this.modalVisKostil = state;
    this.modalVisKostilChange.emit(state)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input,Output, EventEmitter,HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {

  regModal: boolean = false;

  @Input() modalVisKostil: boolean = false;
  @Output() modalVisKostilChange = new EventEmitter<boolean>();

  onChangemodalVis(state: boolean) {
    this.modalVisKostil = state;
    this.regModal = false;
    this.modalVisKostilChange.emit(state)
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.onChangemodalVis(false)
  }

  modalPanel(e:MouseEvent) {
    e.stopPropagation();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

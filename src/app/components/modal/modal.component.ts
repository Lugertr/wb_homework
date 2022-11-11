import { Component, OnInit,Input,Output, EventEmitter,HostListener } from '@angular/core';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { InputFormsInterface } from 'src/app/types/typesInputForms';

import { signInForm,signUpForm } from 'src/app/data/InputForms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../styles/modal.scss']
})


export class ModalComponent implements OnInit {

  regModal: boolean = false;

  @Input() modalVis: boolean = false;
  @Output() modalVisChange = new EventEmitter<boolean>();

  onChangemodalVis(state: boolean) {
    this.modalVis = state;
    this.regModal = false;
    this.modalVisChange.emit(state)
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.onChangemodalVis(false)
  }

  ClickOnDialog(e:MouseEvent) {
    e.stopPropagation();
  }

  loginForm: InputFormsInterface[] = signInForm;
  regForm: InputFormsInterface[] = signUpForm;

  checkboxData: ChekboxFormsInterface = {
    labelName: "Keep me signed in",
    type:"checkbox",
    required:true,
  }

  dialogFormChange() {
    this.modalVis = !this.modalVis;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

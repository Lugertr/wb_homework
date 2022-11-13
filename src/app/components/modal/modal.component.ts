import { Component, OnInit,Input,Output, EventEmitter,HostListener } from '@angular/core';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { InputFormsInterface } from 'src/app/types/typesInputForms';
import { LinksInterface } from 'src/app/types/typesUI';

import { signInForm,signUpForm } from 'src/app/data/InputForms';
import { modal_social_links } from 'src/app/data/linksNames';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../styles/modal.scss']
})


export class ModalComponent implements OnInit {

  regModal: boolean = false;
  
  social_links:LinksInterface[] = modal_social_links;

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
    this.regModal  = !this.regModal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

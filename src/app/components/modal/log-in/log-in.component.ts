import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { InputFormsInterface } from 'src/app/types/typesInputForms';
import { signInForm } from 'src/app/data/InputForms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss',"../modalStyles.scss"]
})
export class LogInComponent implements OnInit {

  inputForms: InputFormsInterface[] = signInForm;

  @Input() SecondModal: boolean = false;
  @Output() SecondModalChange = new EventEmitter<boolean>();

  onChangeSecondModal(e:MouseEvent,state: boolean) {
    e.stopPropagation()
    this.SecondModal = state;
    this.SecondModalChange.emit(state)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
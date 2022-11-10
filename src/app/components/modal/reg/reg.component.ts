import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { InputFormsInterface,ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { signUpForm } from 'src/app/data/InputForms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss',"../modalStyles.scss"]
})
export class RegComponent implements OnInit {

  inputForms: InputFormsInterface[] = signUpForm;

  checkboxData: ChekboxFormsInterface = {
    labelName: "Remember me",
    type:"checkbox",
    required:true,
  }

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

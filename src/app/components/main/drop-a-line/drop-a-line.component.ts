import { Component, OnInit } from '@angular/core';
import { InputFormsInterface,ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { contactInputForm, contactMessageInput } from 'src/app/data/InputForms';

@Component({
  selector: 'app-drop-a-line',
  templateUrl: './drop-a-line.component.html',
  styleUrls: ['./drop-a-line.component.scss']
})
export class DropALineComponent implements OnInit {

  inputs: InputFormsInterface[] = contactInputForm;
  lastInput: InputFormsInterface = contactMessageInput;
  

  checkboxData: ChekboxFormsInterface = {
    labelName: "I agree to receive communications from Createx Online School",
    type:"checkbox",
    required:true,
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}

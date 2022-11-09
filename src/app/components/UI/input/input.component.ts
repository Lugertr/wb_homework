import { Component, OnInit, Input,HostBinding} from '@angular/core';

import { InputFormsInterface } from 'src/app/types/typesInputForms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})


export class InputComponent implements OnInit {

  @Input() data: InputFormsInterface = 
    { labelName: 'empty',
      type:"text",
      placeholder: "emptyField",
      required:false
    }

  constructor() { }

  ngOnInit(): void {
  }

}

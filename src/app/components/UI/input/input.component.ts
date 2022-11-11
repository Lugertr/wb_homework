import { Component, OnInit, Input} from '@angular/core';

import { InputFormsInterface } from 'src/app/types/typesInputForms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../../styles/UI/Input.scss'],
})


export class InputComponent implements OnInit {
  
  @Input() data: InputFormsInterface = 
    { labelName: 'empty',
      type:"text",
      placeholder: "emptyField",
      required:false
    }

    PasswordInput(): boolean {
      if (this.data.type === 'password')
        return true
      return false
    }

    changeType(): void{
      if (this.data.type == "text")
        this.data.type = "password"
      else
        this.data.type = "text"
    } 


  constructor() { }

  ngOnInit(): void {
  }

}

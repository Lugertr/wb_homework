import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';


import { InputFormsInterface } from 'src/app/types/typesInputForms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['../input.component.scss']
})
export class InputPasswordComponent implements OnInit {

  @Input() data:InputFormsInterface = { labelName: 'empty',
  type:"text",
  placeholder: "emptyField",
  required:false
  }

  
  passwordShow:boolean = false;

  setPasswordShow():string {
    this.passwordShow = !this.passwordShow;
    if (this.passwordShow)
      return 'password'
    return 'text'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';

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

  inputType: string = 'text';

  constructor(private cd: ChangeDetectorRef) {}
  

    PasswordInput(): boolean {
      if (this.data.type === 'password')
        return true
      return false
    }

    changeType(): void{
      if (this.inputType=='text') 
        this.inputType = "password"
      else this.inputType = "text"
      this.cd.detectChanges(); 
    } 


  ngOnInit(): void {
    this.inputType= (this.data.type==='password') ? "password":this.data.type;
  }

}

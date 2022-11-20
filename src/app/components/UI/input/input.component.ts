import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';

import { InputFormsInterface } from 'src/app/types/typesInputForms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./Input.component.scss'],
})


export class InputComponent implements OnInit {


  @Input() data: InputFormsInterface = 
  { labelName: 'empty',
    type:"text",
    placeholder: "emptyField",
    required:false
  }

  inputType = 'text';

  constructor(private cd: ChangeDetectorRef) {}
  
    changeType(): void{
      this.inputType = (this.inputType=='text') ? "password": "text";
      this.cd.detectChanges(); 
    } 

  ngOnInit(): void {
    this.inputType = (this.data.type==='password') ? "password":this.data.type;
  }

}

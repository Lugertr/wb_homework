import { Component, OnInit,Input } from '@angular/core';
import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../../../styles/UI/checkbox.scss'],
  host: {'class': 'checkboxfield'}
})
export class CheckboxComponent implements OnInit {

  @Input() data: ChekboxFormsInterface = 
  { labelName: 'empty',
    type:"checkbox",
    required:false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

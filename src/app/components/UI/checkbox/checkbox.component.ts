import { Component, OnInit,Input } from '@angular/core';
import { ChekboxFormsInterface } from 'src/app/data/InputForms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
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

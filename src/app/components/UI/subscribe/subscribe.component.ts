import { Component, OnInit } from '@angular/core';
import { ChekboxFormsInterface } from 'src/app/data/InputForms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  constructor() {}

  subscribeCheckboxData: ChekboxFormsInterface = {
    labelName: 'I agree to receive communications from Createx Online School',
    type: 'checkbox',
    required: true,
  };

  ngOnInit(): void {}
}

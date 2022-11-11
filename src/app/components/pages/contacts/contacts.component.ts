import { Component, OnInit } from '@angular/core';
import { InputFormsInterface,ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { LinksInterface } from 'src/app/types/typesUI';

import { contactInputForm, contactMessageInput } from 'src/app/data/InputForms';
import { social_networks_links } from 'src/app/data/linksNames';

@Component({
  selector: 'app-main',
  templateUrl: './contacts.component.html',
  styleUrls: ['../../../styles/pages/contacts/contacts.scss']
})
export class ContactsComponent implements OnInit {


  social_networks: LinksInterface[] = social_networks_links;

  inputs: InputFormsInterface[] = contactInputForm;
  lastInput: InputFormsInterface = contactMessageInput;
  constructor() {}
  
  checkboxData: ChekboxFormsInterface = {
    labelName: "I agree to receive communications from Createx Online School",
    type:"checkbox",
    required:true,
  }


  ngOnInit(): void {
  }

}

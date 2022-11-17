import { Component, OnInit } from '@angular/core';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['../../../styles/pages/blog/blog.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }


  SubscribeCheckboxData: ChekboxFormsInterface = {
    labelName: "I agree to receive communications from Createx Online School",
    type:"checkbox",
    required:true,
  }


  ngOnInit(): void {
  }

}

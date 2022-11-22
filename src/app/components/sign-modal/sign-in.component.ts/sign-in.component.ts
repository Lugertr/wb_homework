import { Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { InputFormsInterface } from 'src/app/types/typesInputForms';
import { LinksInterface } from 'src/app/types/typesUI';

import { signInForm } from 'src/app/data/InputForms';
import { modal_social_links } from 'src/app/data/linksNames';


@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['../sign-styles.scss',]
  })
  export class DialogSignIn {
  
    constructor(public dialogRef: MatDialogRef<DialogSignIn>,
      private route: ActivatedRoute,
      private readonly router: Router) {}
  
    social_links:LinksInterface[] = modal_social_links;
    loginForm: InputFormsInterface[] = signInForm;
  
    checkboxData: ChekboxFormsInterface = {
      labelName: "Keep me signed in",
      type:"checkbox",
      required:false,
    }
  
    close(): void {
      this.dialogRef.close(false);
    }
    switch(): void {
      this.dialogRef.close(true);
    }
  
  }
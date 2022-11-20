import { Component,OnInit} from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { InputFormsInterface } from 'src/app/types/typesInputForms';
import { LinksInterface } from 'src/app/types/typesUI';

import { signInForm,signUpForm } from 'src/app/data/InputForms';
import { modal_social_links } from 'src/app/data/linksNames';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../sign-styles.scss',]
  })
  export class DialogSignUp{
  
    constructor(public dialogRef: MatDialogRef<DialogSignUp>,
      private readonly router: Router) {}
  
    regForm: InputFormsInterface[] = signUpForm;
    social_links:LinksInterface[] = modal_social_links; 
  
    checkboxData: ChekboxFormsInterface = {
      labelName: "Remember me",
      type:"checkbox",
      required:false,
    }
  
    close(): void {
      this.dialogRef.close(true);
    }
    switch(): void {
      this.dialogRef.close(false);
    }
  
  }
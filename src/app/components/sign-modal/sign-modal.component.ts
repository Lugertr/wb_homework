import { Component,OnInit} from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

import { ChekboxFormsInterface } from 'src/app/types/typesInputForms';
import { InputFormsInterface } from 'src/app/types/typesInputForms';
import { LinksInterface } from 'src/app/types/typesUI';

import { signInForm,signUpForm } from 'src/app/data/InputForms';
import { modal_social_links } from 'src/app/data/linksNames';


@Component({
  template: '',
})
export class SignModalComponent {
  type:boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {
    this.type = this.router.url.split('/').includes('sign_in');
    this.openDialog();
  }

  openDialog(): void {
    let dialogRef;
    if (this.type)
      dialogRef = this.dialog.open(DialogSignIn);
    else 
      dialogRef = this.dialog.open(DialogSignUp);

    dialogRef.afterClosed().subscribe((result) => {
        if (result)
          this.router.navigate(['../'], { relativeTo: this.route });
        else if (this.type)
          this.router.navigate(['../sign_up'], { relativeTo: this.route });
        else 
          this.router.navigate(['../sign_in'], { relativeTo: this.route });
    });
  }

}


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-form-html/sign-in.html',
  styleUrls: ['../../styles/modal.scss']
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
    required:true,
  }

  Close(): void {
    this.dialogRef.close(true);
  }
  switch(): void {
    this.dialogRef.close(false);
  }

}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-form-html/sign-up.html',
  styleUrls: ['../../styles/modal.scss']
})
export class DialogSignUp{

  constructor(public dialogRef: MatDialogRef<DialogSignUp>,
    private readonly router: Router) {}

  regForm: InputFormsInterface[] = signUpForm;
  social_links:LinksInterface[] = modal_social_links; 

  checkboxData: ChekboxFormsInterface = {
    labelName: "Keep me signed in",
    type:"checkbox",
    required:true,
  }

  Close(): void {
    this.dialogRef.close(true);
  }
  switch(): void {
    this.dialogRef.close(false);
  }

}
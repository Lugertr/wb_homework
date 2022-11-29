import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogSignIn } from './sign-in.component.ts/sign-in.component';
import { DialogSignUp } from './sign-up.component/sign-up.component';

@Component({
  template: '',
})
export class SignModalComponent {
  type: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.type = this.router.url.split('/').includes('sign_in');
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.type
      ? this.dialog.open(DialogSignIn)
      : this.dialog.open(DialogSignUp);

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) this.router.navigate(['../'], { relativeTo: this.route });
      else if (this.type)
        this.router.navigate(['../sign_up'], { relativeTo: this.route });
      else this.router.navigate(['../sign_in'], { relativeTo: this.route });
    });
  }
}

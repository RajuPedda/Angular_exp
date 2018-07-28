import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';


  @Component({
    selector: 'fc-custom-dashboard-dialog',
    templateUrl: './custom-dashboard-dialog.html',
  })
  export class CustomDashboardDialogComponent {

    toppings = new FormControl();
    toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    email = new FormControl('', [Validators.required, Validators.email]);
        getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
     }

     constructor(@Inject(MAT_DIALOG_DATA) public data: any) {};
  }

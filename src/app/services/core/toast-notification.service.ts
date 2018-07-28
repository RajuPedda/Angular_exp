import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ToastNotificationInterface } from '../../models/IToast-notification';

@Injectable()
export class ToastNotificationService implements OnInit {

  toastConfig: ToastNotificationInterface;
  confirmBox: Observable<any>;
  constructor() {
    this.toastConfig = {
      title: 'Snotify title!',
      body: 'Lorem ipsum dolor sit amet!',
      timeout: 3000,
      position: 200, // To-Do - positionConfig.Bottom , positionConfig.Top-center etc..
      progressBar: true,
      closeClick: true,
      newTop: true,
      maxHeight: 300,
      titleMaxLength: 15,
      bodyMaxLength: 80,
    };
  }
ngOnInit () {

}


  onConfirmation() {

    this.confirmBox = new Observable(observer => {
      /*
         Here we pass an buttons array, which contains of 2 element of type SnotifyButton
          */
    });



  }

  onPrompt() {
    /*
     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     At the action of the first button we can get what user entered into input field.
     At the second we can't get it. But we can remove this toast
     */

  }


  onClear() {

  }


}



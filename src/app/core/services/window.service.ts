// angular
import { Injectable } from '@angular/core';

// module
import { IWindow } from '../interfaces/iwindow';

/* This will be useful for showing generic messages/confirmation messages */

@Injectable()
export class WindowService implements IWindow {

  public navigator: any = {};
  public location: any = {};
  public alert(msg: string): void { return; }
  public confirm(msg: string): void { return; }

}

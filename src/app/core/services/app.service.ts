// lib
import { Injectable } from '@angular/core';

// app
import { LogService } from './logging/log.service';

@Injectable()
export class AppService {
  constructor(public log: LogService) {
    this.log.debug(`AppService -> `);
  }


}

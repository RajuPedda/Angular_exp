// app
import { ConsoleService } from './console.service';
import { LogService } from './logging/log.service';
import { RouterExtensions } from './router-extensions.service';
import { WindowService } from './window.service';
import { StorageService } from './storage.service';
import { AppService } from '../../core';

export const CORE_PROVIDERS: any[] = [
  WindowService,
  StorageService,
  ConsoleService,
  LogService,
  AppService,
  RouterExtensions,
];

export * from './console.service';
export * from './logging/index';
export * from './router-extensions.service';
export * from './window.service';
export * from './storage.service';

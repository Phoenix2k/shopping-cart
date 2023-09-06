import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(private logger: LoggerService) {}

  public getItem(
    key: Parameters<Storage['getItem']>[0],
  ): ReturnType<Storage['getItem']> {
    try {
      return window.sessionStorage.getItem(key) ?? null;
    } catch {
      this.logger.log('SessionStorage not supported.');
      return null;
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  public setItem(
    key: Parameters<Storage['setItem']>[0],
    data: any,
  ): ReturnType<Storage['setItem']> {
    try {
      this.logger.debug('Saving data to sessionStorage:', data);
      return window.sessionStorage.setItem(key, JSON.stringify(data));
    } catch {
      this.logger.log('SessionStorage not supported.');
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  public removeItem(
    key: Parameters<Storage['removeItem']>[0],
  ): ReturnType<Storage['removeItem']> {
    try {
      this.logger.debug('Removing data from sessionStorage:', key);
      return window.sessionStorage.removeItem(key);
    } catch {
      this.logger.log('SessionStorage not supported.');
    }
  }
}

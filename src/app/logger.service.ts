/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  debug(...msg: any): void {
    console.debug(...msg);
  }
  error(...msg: any): void {
    console.error(...msg);
  }
  info(...msg: any): void {
    console.info(...msg);
  }
  log(...msg: any): void {
    console.log(...msg);
  }
  table(...msg: any): void {
    console.table(...msg);
  }
  warn(...msg: any): void {
    console.warn(...msg);
  }
}

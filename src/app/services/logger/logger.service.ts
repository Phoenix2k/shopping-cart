/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  debug(...msg: any): void {
    if (!isDevMode()) return;
    console.debug(...msg);
  }
  error(...msg: any): void {
    if (!isDevMode()) return;
    console.error(...msg);
  }
  info(...msg: any): void {
    if (!isDevMode()) return;
    console.info(...msg);
  }
  log(...msg: any): void {
    if (!isDevMode()) return;
    console.log(...msg);
  }
  table(...msg: any): void {
    if (!isDevMode()) return;
    console.table(...msg);
  }
  warn(...msg: any): void {
    if (!isDevMode()) return;
    console.warn(...msg);
  }
}

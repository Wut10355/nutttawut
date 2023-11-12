import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Shushi 2';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}

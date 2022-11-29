import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class hostGetter {
  private host: Window;

  constructor() {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) throw new Error('Window is not available');
    this.host = defaultView;
  }

  getHost(): Window {
    return this.host;
  }
}

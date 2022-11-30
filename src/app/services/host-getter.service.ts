import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const HOSTGETTER = new InjectionToken<string>('Window object', {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error('Window is not available');
    }
    return defaultView.URL.toString() + Math.random();
  },
});

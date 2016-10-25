import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const PROVIDERS: Array<any> = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
];

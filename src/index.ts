import { registerPlugin } from '@capacitor/core';

import type { GsCapacitorKustomerPlugin } from './definitions';

const GsCapacitorKustomer = registerPlugin<GsCapacitorKustomerPlugin>(
  'GsCapacitorKustomer',
  {
    web: () => import('./web').then(m => new m.GsCapacitorKustomerWeb()),
  },
);

export * from './definitions';
export * from './kustomer';
export { GsCapacitorKustomer };

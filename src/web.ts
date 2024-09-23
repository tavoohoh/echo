import { WebPlugin } from '@capacitor/core';

import type { GsCapacitorKustomerPlugin } from './definitions';

export class GsCapacitorKustomerWeb
  extends WebPlugin
  implements GsCapacitorKustomerPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

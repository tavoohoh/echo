import { WebPlugin } from '@capacitor/core';

import type { GsCapacitorKustomerPlugin, EchoPayload } from './definitions';

export class GsCapacitorKustomerWeb
  extends WebPlugin
  implements GsCapacitorKustomerPlugin
{
  async echo(options: EchoPayload): Promise<EchoPayload> {
    console.log('ECHO', options);
    return options;
  }
}

export const GsCapacitorKustomer = new GsCapacitorKustomerWeb();

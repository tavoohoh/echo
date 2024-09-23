/**
 * Bridge between Capacitor and Kustomer SDK
 */
export interface GsCapacitorKustomerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

/**
 * Possible platforms
 */
export type Platform = 'web' | 'ios' | 'android';

/**
 * Payload for echo method
 */
export interface EchoPayload { value: string; }

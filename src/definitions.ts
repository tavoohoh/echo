export interface GsCapacitorKustomerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

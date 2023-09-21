export interface GlobalGateway {
  /**
   * Find progress
   */
  findProgress(): Promise<boolean>;

  /**
   * Start new progress
   */
  startProgress(): Promise<void>;
}

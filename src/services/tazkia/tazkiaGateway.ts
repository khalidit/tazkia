import Tazkia from '../../domains/tazkia/Tazkia';

export interface TazkiaGateway {
  /**
   * Find existing tazkia
   */
  find(): Promise<Tazkia>;

  /**
   * Create or update existing tazkia
   * @param value to create or update
   */
  createOrUpdate(value: Tazkia): Promise<Tazkia>;
}

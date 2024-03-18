import { type ReactNode } from 'react';

export interface MetaData {
  /**
   *
   * @description
   */
  avatar?: string | ReactNode;
  /**
   *
   * @description
   */
  backgroundColor?: string;
  description?: string;
  tags?: string[];
  /**
   *
   * @description
   */
  title?: string;
}

export interface BaseDataModel {
  createAt: number;
  id: string;
  meta: MetaData;
  updateAt: number;
}

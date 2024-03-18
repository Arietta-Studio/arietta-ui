import 'antd-style';

import { AriettaCustomStylish } from './customStylish';
import { AriettaCustomToken } from './customToken';

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends AriettaCustomToken {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends AriettaCustomStylish {}
}

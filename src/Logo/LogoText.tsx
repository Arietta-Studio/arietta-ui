import { memo } from 'react';

import { SvgProps } from '@/types';

const LogoText = memo<SvgProps | any>(({ ...rest }) => (
  <svg viewBox="0 0 940 320" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <text fill="currentColor" fontSize="260" fontWeight="bold" x="10" y="230">
      Arietta
    </text>
  </svg>
));

export default LogoText;

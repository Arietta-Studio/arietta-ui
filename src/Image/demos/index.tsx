import { ActionIcon, Image } from '@arietta-studio/ui';
import { Trash } from 'lucide-react';

export default () => {
  return (
    <Image
      actions={<ActionIcon active color={'#fff'} glass icon={Trash} size={'small'} />}
      src={'https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/arietta-chat.webp'}
    />
  );
};

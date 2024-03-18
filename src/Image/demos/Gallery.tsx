import { Image, ImageGallery } from '@arietta-studio/ui';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <Flexbox gap={8}>
      <ImageGallery>
        <Image src={'https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/arietta-chat.webp'} />
        <Image src={'https://gw.alipayobjects.com/zos/kitchen/8Ab%24hLJ5ur/cover.webp'} />
      </ImageGallery>
    </Flexbox>
  );
};

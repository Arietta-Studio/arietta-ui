import {
  ActionIconProps,
  Avatar,
  StoryBook,
  useControls,
  useCreateStore,
} from '@arietta-studio/ui';

import { useCdnFn } from '@/ConfigProvider';

export default () => {
  const genCdnUrl = useCdnFn();
  const store = useCreateStore();
  const control: ActionIconProps | any = useControls(
    {
      animation: false,
      avatar: genCdnUrl({
        path: 'assets/logo-3d.webp',
        pkg: '@arietta-studio/assets-logo',
        version: 'latest',
      }),
      background: '#FEE064',
      shape: {
        options: ['circle', 'square'],
        value: 'circle',
      },
      size: {
        max: 128,
        min: 16,
        step: 1,
        value: 40,
      },
      title: 'cm',
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Avatar {...control} />
    </StoryBook>
  );
};

import {
  GridBackground,
  GridBackgroundProps,
  StoryBook,
  useControls,
  useCreateStore,
} from '@arietta-studio/ui';
import { useTheme } from 'antd-style';

export default () => {
  const theme = useTheme();
  const store = useCreateStore();
  const control: GridBackgroundProps | any = useControls(
    {
      animation: true,
      backgroundColor: '#001dff',
      colorBack: '#ffffff33',
      colorFront: theme.colorText,
      duration: {
        max: 24,
        min: 1,
        step: 1,
        value: 6,
      },
      flip: false,
      random: true,
      reverse: false,
      showBackground: false,
      strokeWidth: {
        max: 10,
        min: 1,
        step: 1,
        value: 3,
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <GridBackground style={{ width: '100%' }} {...control} />
    </StoryBook>
  );
};

import { ThemeProvider } from '@arietta-studio/ui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">Arietta Studio</Button>
    </ThemeProvider>
  );
};

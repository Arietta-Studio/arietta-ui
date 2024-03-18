import { ThemeSwitch } from '@arietta-studio/ui';
import { type ThemeMode } from 'antd-style';
import { useState } from 'react';

export default () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');

  return <ThemeSwitch onThemeSwitch={setThemeMode} themeMode={themeMode} />;
};

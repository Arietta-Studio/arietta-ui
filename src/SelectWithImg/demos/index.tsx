import { SelectWithImg } from '@arietta-studio/ui';
import { useState } from 'react';

export default () => {
  const [active, setActive] = useState('a');
  return (
    <SelectWithImg
      height={86}
      onChange={setActive}
      options={[
        {
          img: `https://unpkg.com/@arietta-studio/assets-emoji@latest/assets/robot.webp`,
          label: 'A',
          value: 'a',
        },
        {
          img: `https://unpkg.com/@arietta-studio/assets-emoji@latest/assets/convenience-store.webp`,
          label: 'B',
          value: 'b',
        },
      ]}
      value={active}
      width={86}
    />
  );
};

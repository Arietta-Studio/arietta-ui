import {
  ActionIconGroup,
  ChatItem,
  ChatItemProps,
  StoryBook,
  useControls,
  useCreateStore,
} from '@arietta-studio/ui';
import { useState } from 'react';

import { avatar, dropdownMenu, items } from './data';

export default () => {
  const [edit, setEdit] = useState(false);
  const store = useCreateStore();
  const control: ChatItemProps | any = useControls(
    {
      loading: false,
      message: {
        rows: true,
        value:
          "javascript\n// dayjs.fromNow()\ndayjs.fromNow() returns the relative time from the current time to the given time. dayjs.fromNow() is a chainable method.\n \n\n```javascript\ndayjs().fromNow();\ndayjs('2021-05-01').fromNow();\n```",
      },
      placement: {
        options: ['left', 'right'],
        value: 'left',
      },
      primary: false,
      showTitle: false,
      time: 1_686_538_950_084,
      type: {
        options: ['block', 'pure'],
        value: 'block',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <ChatItem
        {...control}
        actions={
          <ActionIconGroup
            dropdownMenu={dropdownMenu}
            items={items}
            onActionClick={(action) => {
              if (action.key === 'edit') {
                setEdit(true);
              }
            }}
            type="ghost"
          />
        }
        avatar={avatar}
        editing={edit}
        onEditingChange={setEdit}
      />
    </StoryBook>
  );
};

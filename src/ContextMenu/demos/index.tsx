import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { ContextMenu, Icon } from '@arietta-studio/ui';
import { BoxSelectIcon, CopyIcon } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <ContextMenu
      menu={{
        items: [
          {
            icon: <Icon icon={CopyIcon} size={'small'} />,
            key: 'copy',
            label: 'Copy',
          },
          {
            icon: <Icon icon={BoxSelectIcon} size={'small'} />,
            key: 'selectAll',
            label: 'Select All',
          },
          { icon: <ZoomInOutlined />, key: 'zoomIn', label: 'Zoom In' },
          { icon: <ZoomOutOutlined />, key: 'zoomOut', label: 'Zoom Out' },
          {
            children: [
              { key: '1', label: '1' },
              { key: '2', label: '2' },
            ],
            key: 'recent',
            label: '...',
          },
        ],
      }}
    >
      <Flexbox
        align={'center'}
        justify={'center'}
        style={{ height: '100%', minHeight: 200, width: '100%' }}
      >
        RightClick
      </Flexbox>
    </ContextMenu>
  );
};

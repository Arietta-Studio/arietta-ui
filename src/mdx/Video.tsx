'use client';

import { CSSProperties, FC } from 'react';

import AriettaVideo from '@/Video';

export interface VideoProps {
  borderless?: boolean;
  className?: string;
  cover?: boolean;
  height?: number;
  inStep?: boolean;
  poster?: string;
  src: string;
  style?: CSSProperties;
  width?: number;
}

const Video: FC<VideoProps> = ({ style, width = 840, height, cover, inStep, ...rest }) => {
  const size = cover
    ? { height: 315, width: 840 }
    : inStep
      ? {
          height,
          width: 790,
        }
      : {
          height,
          width,
        };

  return (
    <AriettaVideo
      height={size.height}
      style={{
        borderRadius: 'calc(var(--arietta-markdown-border-radius) * 1px)',
        marginBlock: 'calc(var(--arietta-markdown-margin-multiple) * 1em)',
        ...style,
      }}
      width={size.width}
      {...rest}
    />
  );
};

export default Video;

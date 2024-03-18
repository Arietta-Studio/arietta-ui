'use client';

import { createStyles } from 'antd-style';
import { FC, ReactNode, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import TabsNav from '@/TabsNav';

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    body: css`
      padding-inline: 1em;

      > div {
        margin-block: calc(var(--arietta-markdown-margin-multiple) * 1em);
      }
    `,
    container: css`
      --arietta-markdown-margin-multiple: 1;

      margin-block: calc(var(--arietta-markdown-margin-multiple) * 1em);
      background: ${token.colorFillQuaternary};
      border-radius: calc(var(--arietta-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--arietta-markdown-border-color);
    `,

    header: css`
      border-block-end: 1px solid var(--arietta-markdown-border-color);
      .${prefixCls}-tabs-tab-btn {
        font-size: var(--arietta-markdown-font-size);
        line-height: var(--arietta-markdown-line-height);
      }
    `,
  };
});

export interface _TabItemProps {
  children: ReactNode;
}

const _TabItem: FC<_TabItemProps> = ({ children }) => {
  const { styles } = useStyles();

  return (
    <div className={styles.body}>
      <div>{children}</div>
    </div>
  );
};

export interface _TabsProps {
  children: ReactNode[];
  defaultIndex?: number | string;
  items: string[];
}

const _Tabs: FC<_TabsProps> = ({ defaultIndex = '0', items, children }) => {
  const [activeIndex, setActiveIndex] = useState<string>(String(defaultIndex));
  const { styles } = useStyles();

  const index = Number(activeIndex);

  return (
    <Flexbox className={styles.container}>
      <TabsNav
        activeKey={activeIndex}
        className={styles.header}
        items={items.map((item, i) => ({
          key: String(i),
          label: item,
        }))}
        onChange={setActiveIndex}
        variant={'compact'}
      />
      {children?.[index] || ''}
    </Flexbox>
  );
};

export type TabsProps = typeof _Tabs & {
  Tab: typeof _TabItem;
};

const Tabs = _Tabs as TabsProps;
Tabs.Tab = _TabItem;

export default Tabs;

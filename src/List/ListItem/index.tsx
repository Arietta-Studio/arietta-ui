'use client';

import { Loader2, MessageSquare } from 'lucide-react';
import { CSSProperties, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { Flexbox } from 'react-layout-kit';

import Icon from '@/Icon';

import { useStyles } from './style';
import { getChatItemTime } from './time';

/**
 *
 */
export interface ListItemProps {
  /**
   *
   */
  actions?: ReactNode;
  /**
   *
   */
  active: boolean;
  addon?: ReactNode;
  /**
   *  React
   */
  avatar?: ReactNode;
  /**
   *
   */
  className?: string;
  /**
   *
   * @property time -
   */
  classNames?: {
    time?: string;
  };
  /**
   *
   */
  date?: number;
  /**
   *
   */
  description?: ReactNode;
  /**
   *
   */
  loading?: boolean;
  /**
   *
   */
  onClick?: () => void;
  /**
   *
   * @param hover -
   */
  onHoverChange?: (hover: boolean) => void;

  pin?: boolean;
  /**
   *
   */
  showAction?: boolean;
  /**
   *
   */
  style?: CSSProperties;
  /**
   *
   */
  title: ReactNode;
}

const ListItem = forwardRef<HTMLDivElement, ListItemProps & HTMLAttributes<any>>(
  (
    {
      active,
      avatar,
      loading,
      description,
      date,
      title,
      onHoverChange,
      actions,
      className,
      style,
      showAction,
      children,
      classNames,
      addon,
      pin,
      ...rest
    },
    ref,
  ) => {
    const { styles, cx } = useStyles();

    return (
      <Flexbox
        align={'flex-start'}
        className={cx(styles.container, active && styles.active, className)}
        distribution={'space-between'}
        gap={8}
        horizontal
        onMouseEnter={() => {
          onHoverChange?.(true);
        }}
        onMouseLeave={() => {
          onHoverChange?.(false);
        }}
        padding={12}
        ref={ref}
        style={style}
        {...rest}
      >
        {pin && (
          <div className={styles.pin}>
            <div className={styles.triangle}></div>
          </div>
        )}
        {avatar ?? <Icon icon={MessageSquare} style={{ marginTop: 4 }} />}

        <Flexbox className={styles.content} gap={8}>
          <Flexbox distribution={'space-between'} horizontal>
            <div className={styles.title}>{title}</div>
          </Flexbox>
          {description && <div className={styles.desc}>{description}</div>}
          {addon}
        </Flexbox>

        {loading ? (
          <Icon icon={Loader2} spin />
        ) : (
          <>
            {showAction && (
              <Flexbox
                className={styles.actions}
                gap={4}
                horizontal
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                style={{ display: showAction ? undefined : 'none' }}
              >
                {actions}
              </Flexbox>
            )}
            {date && (
              <div
                className={cx(styles.time, classNames?.time)}
                style={showAction ? { opacity: 0 } : {}}
              >
                {getChatItemTime(date)}
              </div>
            )}
          </>
        )}
        {children}
      </Flexbox>
    );
  },
);

export default ListItem;

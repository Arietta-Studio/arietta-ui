import { Select, type SelectProps } from 'antd';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ReactNode, memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import ActionIcon from '@/ActionIcon';
import CopyButton from '@/CopyButton';
import { languageMap } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import SyntaxHighlighter from './SyntaxHighlighter';
import { useStyles } from './style';

export interface HighlighterProps extends DivProps {
  allowChangeLanguage?: boolean;
  /**
   * @description The code content to be highlighted
   */
  children: string;
  fileName?: string;
  icon?: ReactNode;
  /**
   * @description The language of the code content
   */
  language: string;
}

const options: SelectProps['options'] = languageMap.map((item) => ({
  label: item,
  value: item.toLowerCase(),
}));

export const Highlighter = memo<HighlighterProps>(
  ({
    children,
    language = 'markdown',
    className,
    style,
    allowChangeLanguage = true,
    fileName,
    icon,
    ...rest
  }) => {
    const [expand, setExpand] = useState(true);
    const [lang, setLang] = useState(language);
    const { styles, cx } = useStyles('block');
    const container = cx(styles.container, className);

    return (
      <div className={container} data-code-type="highlighter" style={style} {...rest}>
        <Flexbox align={'center'} className={styles.header} horizontal justify={'space-between'}>
          <ActionIcon
            icon={expand ? ChevronDown : ChevronRight}
            onClick={() => setExpand(!expand)}
            size={{ blockSize: 24, fontSize: 14, strokeWidth: 3 }}
          />
          {allowChangeLanguage && !fileName ? (
            <Select
              className={styles.select}
              onSelect={setLang}
              options={options}
              size={'small'}
              suffixIcon={false}
              value={lang.toLowerCase()}
              variant={'borderless'}
            />
          ) : (
            <Flexbox align={'center'} className={styles.select} gap={2} horizontal>
              {icon}
              <span>{fileName || lang}</span>
            </Flexbox>
          )}

          <CopyButton
            content={children}
            placement="left"
            size={{ blockSize: 24, fontSize: 14, strokeWidth: 2 }}
          />
        </Flexbox>
        <SyntaxHighlighter
          language={lang?.toLowerCase()}
          style={expand ? {} : { height: 0, overflow: 'hidden' }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  },
);

export default Highlighter;

export { default as SyntaxHighlighter, type SyntaxHighlighterProps } from './SyntaxHighlighter';

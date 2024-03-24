import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { css, token, isDarkMode },
    {
      fontSize = 14,
      headerMultiple = 0.25,
      marginMultiple = 1,
      lineHeight = 1.6,
    }: { fontSize?: number; headerMultiple?: number; lineHeight?: number; marginMultiple?: number },
  ) => {
    const cyanColor = isDarkMode ? token.cyan9A : token.cyan11A;
    return {
      chat: css`
        --arietta-markdown-font-size: ${fontSize}px;
        --arietta-markdown-header-multiple: ${headerMultiple};
        --arietta-markdown-margin-multiple: ${marginMultiple};
        --arietta-markdown-line-height: ${lineHeight};
        --arietta-markdown-border-radius: ${token.borderRadius};

        margin-block: ${marginMultiple * -0.75}em;

        ol,
        ul {
          li {
            &::marker {
              color: ${cyanColor};
            }

            li {
              &::marker {
                color: ${token.colorTextSecondary};
              }
            }
          }
        }

        ul {
          list-style: unset;

          li {
            &::before {
              content: unset;
              display: unset;
            }
          }
        }
      `,
    };
  },
);

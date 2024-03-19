'use client';

import { App } from 'antd';
import {
  ThemeProvider as AntdThemeProvider,
  ThemeProviderProps as AntdThemeProviderProps,
  CustomStylishParams,
  CustomTokenParams,
  GetAntdTheme,
  StaticInstance,
  StyleProvider,
  ThemeAppearance,
  ThemeMode,
} from 'antd-style';
import { ConfigOptions as MessageConfig } from 'antd/es/message/interface';
import { NotificationConfig } from 'antd/es/notification/interface';
import { CSSProperties, memo, useCallback } from 'react';

import { useCdnFn } from '@/ConfigProvider';
import FontLoader from '@/FontLoader';
import { NeutralColors, PrimaryColors, ariettaCustomStylish, ariettaCustomToken } from '@/styles';
import { createAriettaAntdTheme } from '@/styles/theme/antdTheme';
import { AriettaCustomToken } from '@/types/customToken';

import GlobalStyle from './GlobalStyle';

export interface ThemeProviderProps extends Omit<AntdThemeProviderProps<any>, 'theme'> {
  /**
   * @description Appearance of the application theme, default provides two light and dark, users can extend it by themselves
   * @default light
   */
  appearance?: ThemeAppearance;
  className?: string;
  customStylish?: (theme: CustomStylishParams) => { [key: string]: any };
  customTheme?: {
    neutralColor?: NeutralColors;
    primaryColor?: PrimaryColors;
  };

  /**
   * @description Custom extra token
   */
  customToken?: (theme: CustomTokenParams) => { [key: string]: any };
  enableGlobalStyle?: boolean;
  enableWebfonts?: boolean;
  /**
   * @description Get static instance from ThemeProvider
   * @param instances
   */
  getStaticInstance?: (instances: StaticInstance) => void;
  /**
   * @description Static instance config
   */
  staticInstanceConfig?: {
    message?: MessageConfig;
    notification?: NotificationConfig;
  };
  style?: CSSProperties;
  /**
   * @description Theme of the application, or pass in a function to return the corresponding theme based on the current theme mode
   * @default light
   */
  themeMode?: ThemeMode;
  /**
   * @description Webfont loader css strings
   */
  webfonts?: string[];
}

const ThemeProvider = memo<ThemeProviderProps>(
  ({
    children,
    customStylish,
    customToken,
    enableWebfonts = true,
    enableGlobalStyle = true,
    webfonts,
    customTheme = {},
    className,
    style,
    ...res
  }) => {
    const genCdnUrl = useCdnFn();
    const webfontUrls = webfonts || [
      genCdnUrl({ path: 'css/index.css', pkg: '@arietta-studio/webfont-mono', version: 'latest' }),
      genCdnUrl({
        path: 'css/index.css',
        pkg: '@arietta-studio/webfont-harmony-sans',
        version: 'latest',
      }),
      genCdnUrl({
        path: 'css/index.css',
        pkg: '@arietta-studio/webfont-harmony-sans-sc',
        version: 'latest',
      }),
      genCdnUrl({ path: 'dist/katex.min.css', pkg: 'katex', version: '0.16.8' }),
    ];

    const stylish = useCallback(
      (theme: CustomStylishParams) => ({
        ...ariettaCustomStylish(theme),
        ...customStylish?.(theme),
      }),
      [customStylish],
    );

    const token = useCallback(
      (theme: CustomTokenParams) => ({ ...ariettaCustomToken(theme), ...customToken?.(theme) }),
      [customToken],
    );

    const theme = useCallback<GetAntdTheme>(
      (appearance) =>
        createAriettaAntdTheme({
          appearance,
          neutralColor: customTheme.neutralColor,
          primaryColor: customTheme.primaryColor,
        }),
      [customTheme.primaryColor, customTheme.neutralColor],
    );

    return (
      <>
        {enableWebfonts &&
          webfontUrls?.length > 0 &&
          webfontUrls.map((webfont) => <FontLoader key={webfont} url={webfont} />)}
        <StyleProvider speedy={process.env.NODE_ENV === 'production'}>
          <AntdThemeProvider<AriettaCustomToken>
            customStylish={stylish}
            customToken={token}
            {...res}
            theme={theme}
          >
            {enableGlobalStyle && <GlobalStyle />}
            <App className={className} style={{ minHeight: 'inherit', width: 'inherit', ...style }}>
              {children}
            </App>
          </AntdThemeProvider>
        </StyleProvider>
      </>
    );
  },
);

export default ThemeProvider;

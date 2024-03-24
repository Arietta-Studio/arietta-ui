import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components', '/mdx'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'Arietta UI is an open-source UI component library for building amazing web apps',
  footer: 'Made with 🤯 by Arietta Studio',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOLh7xvs4CeD-C',
    repo: 'arietta-studio/arietta-ui',
    repoId: 'R_kgDOLh7xvg',
  },
  name: 'UI',
  nav: [
    { link: '/components/action-icon', title: 'Components' },
    { link: '/mdx/callout', title: 'Mdx' },
    { link: '/colors', title: 'Colors' },
    { link: '/changelog', title: 'Changelog' },
  ],
  socialLinks: {
    discord: 'https://discord.gg/',
    github: homepage,
  },
  title: 'Arietta UI',
};

export default defineConfig({
  alias: {
    '@arietta-studio/ui/mdx': resolve(__dirname, './src/mdx'),
  },
  apiParser: isProduction ? {} : false,
  base: '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://unpkg.com/@arietta-studio/assets-favicons@latest/assets/favicon.ico'],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'lt-LT', name: 'Lietuvių' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Arietta UI',
});

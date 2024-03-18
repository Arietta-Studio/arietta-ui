import { Footer, FooterProps } from '@arietta-studio/ui';

const columns: FooterProps['columns'] = [
  {
    items: [
      {
        description: 'UI Components',
        openExternal: true,
        title: '🤯 Arietta UI',
        url: 'https://github.com/arietta-studio/arietta-ui',
      },
      {
        description: 'Chatbot Client',
        openExternal: true,
        title: '🤯 Arietta Chat',
        url: 'https://github.com/arietta-studio/arietta-chat',
      },
      {
        description: 'Node Flow Editor',
        openExternal: true,
        title: '🤯 Arietta Flow',
        url: 'https://github.com/arietta-studio/arietta-flow',
      },
    ],
    title: 'Resources',
  },
  {
    items: [
      {
        description: 'AI Commit CLI',
        openExternal: true,
        title: '💌 Arietta Commit',
        url: 'https://github.com/arietta-studio/arietta-commit',
      },
      {
        description: 'Lint Config',
        openExternal: true,
        title: '📐 Arietta Lint',
        url: 'https://github.com/arietta-studio/arietta-lint',
      },
    ],
    title: 'More Products',
  },
];

export default () => {
  return <Footer bottom="Copyright © 2024" columns={columns} />;
};
